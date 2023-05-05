chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currTab = tabs[0];
    if (currTab) {
      chrome.scripting.executeScript({
        target: { tabId: currTab.id },
        files: ["content.js"],
      });
    }
  });
});
