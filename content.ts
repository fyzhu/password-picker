console.log(
  "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)
window.addEventListener(
  "message",
  (event) => {
    var origin = event.origin
    // 通常，onmessage()事件处理程序应当首先检测其中的origin属性，忽略来自未知源的消息
    // if (origin !== "http://example.org:8080")
    //   return;
  },
  false
)
window.onload = () => {
  console.log("window.onload")
  const password = document.querySelector("input[type=password]")
  // password && console.log(password.value)

  password?.addEventListener("change", () => {
    console.log("password changed", password.value)
    alert(password.value)
  })
  password?.addEventListener("click", () => {
    console.log("password clicked", password.value)
    alert(password.value)
  })
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded")
})
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    console.log("interactive")
  }
  if (document.readyState === "complete") {
    console.log("complete")
  }
}
