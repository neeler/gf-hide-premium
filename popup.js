const hidePremiumButton = document.getElementById("hidePremiumButton");

hidePremiumButton.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "hidePremium.js",
    });
  });
};
