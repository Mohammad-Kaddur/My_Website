let download = document.getElementById("download-cv");
console.log(download);
download.onclick = function () {
  getPdf();
  // download.herf =
  //   "https://drive.google.com/file/d/1zPFyll-xNlYhiHIY0kRY5G8XETQQPNd5/view?usp=drivesdk";
};

function getPdf() {
  let getPdf = new XMLHttpRequest();
  getPdf.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let getResponseText = JSON.parse(this.responseText);
      console.log(getResponseText);
      let questionCounts = getResponseText.length;
    }
  };
  getPdf.open(
    "GET",
    "https://drive.google.com/file/d/1zPFyll-xNlYhiHIY0kRY5G8XETQQPNd5/view?usp=drivesdk' from origin 'http://127.0.0.1:5500",
    true
  );
  getPdf.send();
}

// fetch(
//   "https://drive.google.com/file/d/1zPFyll-xNlYhiHIY0kRY5G8XETQQPNd5/view?usp=drivesdk' from origin 'http://127.0.0.1:5500"
// )
//   .then((e) => {
//     e.json();
//   })
//   .then((j) => {
//     console.log(j);
//   });
