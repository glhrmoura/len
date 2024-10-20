document.addEventListener('mouseup', () => {
  if (chrome.runtime?.id) {
    setTimeout(() => {
      const selection = window.getSelection().toString();
      chrome.runtime.sendMessage({ charLen: selection?.length || 0 });
    }, 100);
  }
});

document.addEventListener('keydown', (event) => {
  if (chrome.runtime?.id && (event.metaKey || event.ctrlKey) && event.key === 'a') {
    setTimeout(() => {
      const selection = window.getSelection().toString();
      const charLen = selection.length;
      chrome.runtime.sendMessage({ charLen });
    }, 100);
  }
});
