function onError(error) {
  console.log(`Error : ${error}`);
}

browser.tabs.query({url : "*://va.news-republic.com/*"}).then((tabs) => {
  for (let tab of tabs) {
    var displayFullContent = browser.tabs.insertCSS(tab.id, {
      file: "custom-style.css"
    });
    displayFullContent.then(null, onError);
  }
}, onError);

