function showResult() {
    var result = document.getElementById('result');
    var sum = 0;
    var n = 0;
  
    while (sum < 10000) {
      n++;
      sum = sum + n;
    }
  
    result.innerHTML = `Số nguyên dương nhỏ nhất để 1 + 2 + ... + n > 10000 là: <span style="color:red"> ${n} </span>`;
  };