// function loadData() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       for (var i = 0; i < data.length; i++) {
//         setTimeout(function() {
//           document.getElementById("data").innerHTML += "<p>" + data[i].name + "</p>";
//         }, 1000);
//       }
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }



function loadData() {
  var container = document.getElementById("data");
  var button = document.getElementById("loadBtn");

  button.disabled = true;
  container.innerHTML = "Loading...";

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      container.innerHTML = "";

      for (let i = 0; i < data.length; i++) {   // only important fix
        setTimeout(function() {
          var p = document.createElement("p");
          p.innerHTML = data[i].name;
          container.appendChild(p);
        }, 1000);
      }

      button.disabled = false;  // simple handling
    })
    .catch(function(err) {
      container.innerHTML = "Failed to load data";
      button.disabled = false;
    });
}
