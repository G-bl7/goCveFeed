chrome.contextMenus.create({
    id: "cveFeedLookup",
    title: "Go to CVE Feed Database",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "cveFeedLookup" && info.selectionText) {
      let cveId = info.selectionText.trim().toUpperCase();
      if (/CVE-\d{4}-\d{4,7}/.test(cveId)) {
        let url = `https://cvefeed.io/vuln/detail/${cveId}`;
        chrome.tabs.create({ url: url });
      } else {
        alert("Invalid CVE ID. Please select a valid CVE ID.");
      }
    }
  });
  