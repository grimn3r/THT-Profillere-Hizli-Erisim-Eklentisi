document.addEventListener("DOMContentLoaded", function () {

  var GrimnerButton = document.getElementById("Grimner");
  var ReinaButton = document.getElementById("Reina");
  var PumpButton = document.getElementById("Pump");

  GrimnerButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "https://www.turkhackteam.org/uye/grimner.892463/" });
  });

  ReinaButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "https://www.turkhackteam.org/uye/rei-a.879110/" });
  });

  PumpButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "https://www.turkhackteam.org/uye/pump.988625/" });
  });
});