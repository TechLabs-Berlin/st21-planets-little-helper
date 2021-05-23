function formatUrlParams(string){
    return string.replaceAll("-", " ").replace(/^\w/, (c) => c.toUpperCase());
}

export {formatUrlParams} 