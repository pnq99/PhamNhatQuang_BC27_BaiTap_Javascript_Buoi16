function showResult() {
    var n = +document.getElementById('inputN').value;
    var result = document.getElementById('result');
  
    var factorial = 1;
    console.log(factorial);
  
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    result.innerHTML = `Giai thừa của ${n} là: <span style="color:red">   ${factorial}`;
  };