const convertString = (input) => {
  if (typeof input === 'string') {
    return input.toLowerCase()
  }else{
    return input
  }
}

export default convertString