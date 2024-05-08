document.body.addEventListener("mousemove", function (e) {
  console.log(e);
  document.querySelector(".ghost").style.left = e.pageX + "px";
  document.querySelector(".ghost").style.top = e.pageY + "px";
  document.querySelector(".ghost").style.bottom = e.pageX + "px";
  document.querySelector(".ghost").style.right = e.pageY + "px";
});
