import { useState, useEffect } from "react";
import styles from "./recommendations.module.css";
import { connect } from "react-redux";
import { addChallenge, fetchChallenges } from "../../store/actions/challenges";

const rec = [];
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Recommendations({ addChallenge, fetchChallenges, challenges }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [show, setShow] = useState(3);

  useEffect(() => {
    fetchChallenges();
    // eslint-disable-next-line
  }, []);

  function next() {
    if (currentIndex < rec.length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }

  function prev() {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }

  function handleTouchStart(e) {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(e) {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }

  return (
    <div className={styles.container}>
      <h2>Our recommendations for you:</h2>
      <div className={styles.wrapper}>
        {currentIndex > 0 && (
          <button className={styles.leftArrow} onClick={prev}>
            left
          </button>
        )}
        <div
          className={styles.contentWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={styles.content}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {challenges.map((challenge) => (
              <div
                key={challenge._id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h4>{challenge.title}</h4>
                <p>{challenge.challenge}</p>
              </div>
            ))}
          </div>
        </div>
        {currentIndex < rec - show && (
          <button className={styles.rightArrow} onClick={next}>
            right
          </button>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    challenges: state.challenges,
  };
}

export default connect(mapStateToProps, { addChallenge, fetchChallenges })(
  Recommendations
);
