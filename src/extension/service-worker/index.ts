chrome.runtime.onMessage.addListener((request) => {
  if (request.charCount !== undefined) {
    const charCount = request.charCount;
    chrome.action.setBadgeText({ text: charCount > 0 ? charCount.toString() : '' });
    chrome.action.setBadgeBackgroundColor({ color: '#FFFFFF' });
  }
});
