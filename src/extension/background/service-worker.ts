chrome.runtime.onMessage.addListener((request) => {
  if (request.charLen !== undefined) {
    const charLen = request.charLen;
    chrome.action.setBadgeText({ text: charLen > 0 ? charLen.toString() : '' });
    chrome.action.setBadgeBackgroundColor({ color: '#FFFFFF' });
  }
});
