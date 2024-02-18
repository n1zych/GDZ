function numberAlgebra(/*numberAxOne, numberAxTwo, numberAxFre*/) {
  let numberAxOne = prompt("ax^2 - перше число а");
  let numberAxTwo = prompt("bx - друге число b");
  let numberAxFre = prompt("c - третє число c");
  numberAxOne = parseFloat(numberAxOne);
  numberAxTwo = parseFloat(numberAxTwo);
  numberAxFre = parseFloat(numberAxFre);

  if (numberAxOne == 0 || numberAxTwo == 0 || numberAxFre == 0) {
    alert("false");
    return;
  } else if (isNaN(numberAxOne) || isNaN(numberAxTwo) || isNaN(numberAxFre)) {
    alert("Введено не числа");
    return;
  }

  let Dus = numberAxTwo * numberAxTwo - 4 * numberAxOne * numberAxFre;

  if (Dus < 0) {
    alert("D < 0 , коренів немає");
    return;
  } else if (Dus === 0) {
    const x1 = -numberAxTwo / (2 * numberAxOne);
    alert("х1 = " + x1 + "    = корінь тільки один бо D = 0");
    return;
  } else {
    let dSqrt = Math.sqrt(Dus);
    alert("корінь D = " + dSqrt);
    if (/^\d+\.\d+$/.test(dSqrt)) {
      alert("Корінь не добувається");
      return;
    }
    const x1 = (-numberAxTwo + dSqrt) / (2 * numberAxOne);
    const x2 = (-numberAxTwo - dSqrt) / (2 * numberAxOne);
    alert("X1 = " + x1 + " <--->  X2 = " + x2);
    return;
  }
}

function numberGeometri() {
  let numOne = prompt("x-1");
  let numTwo = prompt("y-1");
  let numFre = prompt("x-2");
  let numFour = prompt("y-2");
  numOne = parseFloat(numOne);
  numTwo = parseFloat(numTwo);
  numFre = parseFloat(numFre);
  numFour = parseFloat(numFour);
  if (isNaN(numOne) || isNaN(numTwo) || isNaN(numFre) || isNaN(numFour)) {
    alert("Введено не числа");
    return;
  }
  let valueX = numFre - numOne;
  let valueY = numFour - numTwo;
  let squareX = valueX * valueX;
  let squareY = valueY * valueY;
  let sumaNum = squareX + squareY;
  let korin = Math.sqrt(sumaNum);
  alert(
    "сума під коренем - " +
      sumaNum +
      "   ||  корінь з цього числа - " +
      korin.toFixed(2)
  );
}
function numberGeometriCenter() {
  let numOne = prompt("x-1");
  let numTwo = prompt("y-1");
  let numFre = prompt("x-2");
  let numFour = prompt("y-2");
  numOne = parseFloat(numOne);
  numTwo = parseFloat(numTwo);
  numFre = parseFloat(numFre);
  numFour = parseFloat(numFour);
  if (isNaN(numOne) || isNaN(numTwo) || isNaN(numFre) || isNaN(numFour)) {
    alert("Введено не числа");
    return;
  }
  let x0 = (numOne + numFre) / 2;
  let y0 = (numTwo + numFour) / 2;
  alert("x = " + x0 + "  ||||  " + " y = " + y0);
}

function BankAlgebra() {
  let numOne = prompt("Сума грн");
  let numTwo = prompt("на скільки років");
  let numFre = prompt("під які відсотки");
  numOne = parseFloat(numOne);
  numTwo = parseFloat(numTwo);
  numFre = parseFloat(numFre);
  if (isNaN(numOne) || isNaN(numTwo) || isNaN(numFre)) {
    alert("Введено не числа");
    return;
  }
  let diyaOne = 1 + numFre / 100;
  let diyaTwo = diyaOne ** numTwo;
  const result = Math.floor(diyaTwo * numOne);
  alert("Вивод - " + result + " грн або $");
}
