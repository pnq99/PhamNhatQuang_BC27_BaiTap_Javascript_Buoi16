function showResult() {
    var inputX = +document.getElementById('inputX').value;
    var inputN = +document.getElementById('inputN').value;
    var result = document.getElementById('result');
  
    var sum = calcSum(inputX, inputN);
  
    result.innerHTML = `Tổng: <span style="color: red"> ${sum} </span>`;
  };
  
  function calcSum(x, n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += x ** i;
    }
    return sum;
  };
  
  calcSum(2, 3);