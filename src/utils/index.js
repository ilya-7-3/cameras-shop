const correctedNumber = (str) => {
    return  Number(str).toFixed().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export {
    correctedNumber
}