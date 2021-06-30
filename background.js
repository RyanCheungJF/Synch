chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
  window.alert(command);
});

/*
    This event triggers when the browser has committed to loading a webpage.
    As opposed to e.g. webNavigation.onCompleted, this will start to run early
    so that we can begin to remove ads as soon as possible.
*/
//chrome.webNavigation.onCommitted.addListener(function (tab) {
    // Prevents script from running when other frames load
    /*if (tab.frameId == 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {

            // Get the URL of the webpage
            let url = tabs[0].url;
            // Remove unnecessary protocol definitions and www subdomain from the URL
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")

            // Remove path and queries e.g. linkedin.com/feed or linkedin.com?query=value
            // We only want the base domain
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));
*/
            try {
                runadBlock();
            } catch (err) {
                throw err;
            }

  //      });
  //  }
//});

function runadBlock() {
    // Inject script from file into the webpage
    chrome.tabs.executeScript({
        file: 'adblock.js'
    });
    return true;
}
