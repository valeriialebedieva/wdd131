window.onload = function () {
  let reviewCount = localStorage.getItem("reviewCount");
  if (!reviewCount) {
    localStorage.setItem("reviewCount", 0);
  }
};

if (window.location.pathname.includes("review.html")) {
  let reviewCount = localStorage.getItem("reviewCount");
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
  alert("You have completed " + reviewCount + " reviews!");
};

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
