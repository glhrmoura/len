document.addEventListener('mouseup', () => {
  const selection = window.getSelection().toString();

  if (selection) {
    chrome.runtime.sendMessage({ charCount: selection.length });
  } else {
    chrome.runtime.sendMessage({ charCount: 0 });
  }
});

document.addEventListener('keydown', (event) => {
  let timout = null;

  if ((event.metaKey || event.ctrlKey) && event.key === 'a') {
    clearInterval(timout);
    timout = setTimeout(() => {
      const selection = window.getSelection().toString();
      const charCount = selection.length;
      chrome.runtime.sendMessage({ charCount });
    }, 100);
  }
});
