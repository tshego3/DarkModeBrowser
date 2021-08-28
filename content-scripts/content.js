chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    $("head").prepend(
        `<style>
          .dark-mode {
                background-color: #1A1A1A;
                color: #E5E5E5;
          }
        </style>`
    );

    var element = document.body;
    element.classList.toggle("dark-mode");

    sendResponse({ fromcontent: "This message is from content.js" });
});