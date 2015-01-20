function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var query = getParameterByName("q");

if (query != ""){
  chrome.runtime.sendMessage({query: query});
}

window.onload = function(){
    document.body.innerHTML = "";
    document.head.innerHTML = "";
    document.body.style.display = "block";

    if (query != "") {
      return;
    }

    document.head.innerHTML = "<title>Lucky Strike</title>";

    document.body.innerHTML += '<p>Thank you for installing Lucky Strike!</p>';
    document.body.innerHTML += '<p>To complete the installation, right-click on the box below, <br /> \
                                then select "Add As Search Engine". \
                                </p>';
    document.body.innerHTML += '<form target="" method="GET"><input type="text" name="q" placeholder="Right-click me" /></form>';
    document.body.innerHTML += '<p>Set the \'Name\' to be "Lucky Strike" and the \'Keyword\' to be "LS".</p>';
    document.body.innerHTML += '<p>Click \'OK\'.';

    document.body.innerHTML += '<p>Then, navigate to <a href="chrome://settings/" target="_blank">Chrome Settings</a>. \
                                  Under \'Search\', click "Manage search engines...". Scroll down the alphabetical listing, \
                                  hover over the entry for \'Lucky Strike\', and click "Make default". \
                                </p>';

    document.body.innerHTML += '<p>Your omnibox searches will now lead to Google\'s "I\'m Feeling Lucky". \
                                To view search results for your last query, click the Lucky Strike logo on the top right of your browser or press ALT+L. \
                                To force a regular Google search, just use the \'g\' keyword before your query. \
                                </p>';

    document.body.innerHTML += '<p>Lucky Strike is not affiliated with Google, Inc.</p>';

    document.body.innerHTML += '<p>Learn more at <a href="http://www.shubhro.com" target="blank">www.shubhro.com</a></p>';

}
