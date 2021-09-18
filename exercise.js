const valuesRoman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
 
function convertRomanToDecimal(value) {
  try {
    validateValue(value);

    let decimalNumber = 0;

    for (let i = 0; i < value.length; i++) {
      for (let obj in valuesRoman) {
        if (obj === value[i]) {
          decimalNumber += valuesRoman[obj];
        }
      }
    }
    return decimalNumber;
  } catch (error) {
    console.log(error.message);
  }
}

function validateValue(value) {
  if (!value) {
    throw new Error("Value indefined!");
  }

  return true;
}

export { convertRomanToDecimal }
