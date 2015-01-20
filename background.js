chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      chrome.storage.local.set({'lastQuery': request.query});
      chrome.tabs.update({ url: "http://www.google.com/search?q="+request.query+"&btnI" });
      sendResponse({response: "success"});
  });

chrome.browserAction.onClicked.addListener(
  function(tab) {
    chrome.storage.local.get("lastQuery", function(obj) {
      chrome.tabs.update({ url: "http://www.google.com/search?q="+obj.lastQuery });
    });
  });

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://www.google.com/lucky-strike-extension/"});
});