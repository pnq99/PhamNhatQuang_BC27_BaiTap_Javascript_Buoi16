function showResult() {
    var n = +document.getElementById('inputN').value;
    var results = document.getElementById('result');
  
    var num = '';
  
    if (n === 0 || n === 1) {
      results.innerHTML =
        '1 không phải là số nguyên tố vì nó đã được loại trừ ra khỏi định nghĩa.';
      return;
    }
  
    for (var i = 3; i <= n; i += 2) {
      if (isPrime(i)) {
        num += ` ${i}`;
      }
    }
    // console.log(arr); // use arr result on your own
    results.innerHTML = num;
  };
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }