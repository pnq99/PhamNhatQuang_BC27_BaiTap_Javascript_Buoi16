function showResult() {
    var results = document.getElementById('result');
  
    for (var i = 1; i <= 10; i++) {
      if (i % 2 !== 0) {
        results.innerHTML += `<div style="background-color: blue; color: white"> Div lẻ số ${i}</div>`;
      } else if (i % 2 === 0) {
        results.innerHTML += `<div style="background-color: red; color:white"> Div chẵn số ${i}</div>`;
      }
    }
  };