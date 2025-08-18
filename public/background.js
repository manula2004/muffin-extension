// background.js
// Listens for extension icon click and injects content.js into the current tab
chrome.action.onClicked.addListener((tab) => {
  const tabId = tab.id;
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['content.js']
  });
  console.log(`Content script injected into tab ${tabId}`);
});
