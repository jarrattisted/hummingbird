function findPersonOnTwitter(info) {
  var url = "https://twitter.com/search?f=users&vertical=default&q=" +
            info.selectionText;
  chrome.tabs.create({
    "url": url,
  });
}

// Create right-click menu to open a new tab and use selection
chrome.contextMenus.create({
  "title": "Find '%s' on Twitter",
  "contexts":["selection"],
  "onclick": findPersonOnTwitter,
});
