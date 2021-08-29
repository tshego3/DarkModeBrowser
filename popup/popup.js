chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {
            tabId: tabs[0].id
        },
        function(response) {
            window.close();
        }
    );
});