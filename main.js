
let overlay = document.querySelector(".container .overlay")
let subMsg = document.querySelector(".container .subscribed-msg")
let theInp = document.querySelector("#email")
let theMail = document.querySelector("the-e-mail")

// /^[a-z0-9\.-_%]+@[a-z]+.[a-z]$/ig

document.querySelector(".the-content input[type=submit]").onclick = function () {
  let mailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validation = mailRe.test(theInp.value)
  if (validation == true) {
    overlay.style = "display: block"
    subMsg.style = "display: flex"
    theMail.innerhtml = theInp.value
  }else {
    document.querySelector(".the-content .email-inp p").style.display = "block"
    theInp.classList.add("unavailoble")
  }
}
document.querySelector(".container .subscribed-msg button").onclick = function () {
  overlay.style.display = "none"
  subMsg.style.display = "none"
}
theInp.addEventListener("focus", () => {
  theInp.classList.remove("unavailoble")
  document.querySelector(".the-content .email-inp p").style.display = "none"
})