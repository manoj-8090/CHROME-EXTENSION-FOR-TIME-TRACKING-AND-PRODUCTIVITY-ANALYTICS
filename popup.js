let time = 0;
let timer;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let url = new URL(tabs[0].url);
  document.getElementById("current-site").textContent =
    "Current Site: " + url.hostname;
});

timer = setInterval(() => {
  time++;
  document.getElementById("time-spent").textContent =
    "Time Spent: " + time + "s";
}, 1000);

document.getElementById("view-dashboard").addEventListener("click", () => {
  chrome.tabs.create({ url: "dashboard.html" });
});