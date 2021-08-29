chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    $("head").prepend(
        `<style>
          .dark-mode {
                background-color: #1A1A1A;
                color: #E5E5E5;
          }
        </style>`
    );

    $("html, pre").css({ "background": "#1A1A1A" });
    $("div, h1, h2, h3, p, textarea, tr, td, th").css({ "background-color": "#1A1A1A", "color": "#E5E5E5" });
    $("code, span").css({ "background": "#1A1A1A", "color": "#E5E5E5"});
    $("a").css({ "color": "#E5E5E5"});

    var element = document.body;
    element.classList.toggle("dark-mode");

    sendResponse({ fromcontent: "This message is from content.js" });
});