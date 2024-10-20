document.addEventListener('mouseup', () => {
  if (chrome.runtime?.id) {
    setTimeout(() => {
      const selection = window.getSelection().toString();

      if (selection) {
        chrome.runtime.sendMessage({ charCount: selection.length });
      } else {
        chrome.runtime.sendMessage({ charCount: 0 });
      }
    }, 100);
  }
});

document.addEventListener('keydown', (event) => {
  if (chrome.runtime?.id && (event.metaKey || event.ctrlKey) && event.key === 'a') {
    setTimeout(() => {
      const selection = window.getSelection().toString();
      const charCount = selection.length;
      chrome.runtime.sendMessage({ charCount });
    }, 100);
  }
});
