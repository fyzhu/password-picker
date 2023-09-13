chrome.contextMenus.create({
  id: "yourContextMenu",
  title: "获取密码",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "yourContextMenu") {
    // 在这里执行右键菜单项点击后的操作
    // 例如，可以打开一个新标签页或执行其他操作
    console.log('test', info.menuItemId);
    
  }
});
