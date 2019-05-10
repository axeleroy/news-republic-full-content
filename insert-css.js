function onError(error) {
  console.log(`Error : ${error}`);
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  var displayFullContent = browser.tabs.insertCSS(tabId, {
    file: "custom-style.css"
  });
  displayFullContent.then(null, onError);
}, {
  urls: ["*://va.news-republic.com/*"]
});
