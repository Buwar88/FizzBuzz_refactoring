const number = parseInt(2)

function typeOfNaN(number) {
    if (Number.isNaN(number)) {
      return 'Number NaN';
    }
    if (isNaN(number)) {
      return 'NaN';
    }
    if (!isNaN(number)){
        return "es un numero"
    }
  }
  console.log(typeOfNaN(10))