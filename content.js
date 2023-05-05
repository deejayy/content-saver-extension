const value = document.body.innerText;

chrome.storage.local.set({ [location.href]: value }).then(() => {
  console.log("Value is set to " + value);
});
