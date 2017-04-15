// Create one test item for each context type.
var context = "selection";
var url = "https://twitter.com/search?f=users&vertical=default&q=" + encodedName;
var name = "";
var encodedName = encodeURI(name);

chrome.contextMenus.create({}, function() {
  
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
