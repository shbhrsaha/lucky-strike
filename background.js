chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.storage.sync.set({'lastQuery': text});
    chrome.tabs.update({ url: "http://www.google.com/search?q="+text+"&btnI" });
  });

chrome.browserAction.onClicked.addListener(
  function(tab) {
    chrome.storage.sync.get("lastQuery", function(obj) {
      chrome.tabs.update({ url: "http://www.google.com/search?q="+obj.lastQuery });
    });
  });

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "https://github.com/shbhrsaha/lucky-strike/blob/master/README.md"});
});