function constructTwitterUrl(name) {
  // Basic structure for Twitter people search
  var url = "https://twitter.com/search?f=users&vertical=default&q=";
  if (name) {
    // Encode the name so it works in the url
    var encodedName = encodeURI(name);
    // Return the url with name attached to the end
    return url + encodedName;
  } else(e) {
   console.log("Nothing selected" + e);
  }
}

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

// Create an item for right-click menu on Chrome
chrome.contextMenus.create({
                            "contexts": ["selection"],
                            "onclick": constructTwitterUrl,
                            "title": "Find '%s' on Twitter"
                          });

// Intentionally create an invalid item, to show off error checking in the
// create callback.
console.log("About to try creating an invalid item - an error about " +
            "item 999 should show up");
chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});
