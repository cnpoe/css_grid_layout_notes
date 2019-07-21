function openNavBar() {
  console.log('open')
  document.getElementsByTagName('body')[0].style.
    gridTemplateColumns = "290px [col-main] 2fr 1fr";
  document.getElementById('burger').style.display = "none"
  document.getElementById('no-burger').style.display = "inherit"
}

function collapseNavBar() {
  console.log('close')
  document.getElementsByTagName('body')[0].style.
    gridTemplateColumns = "70px [col-main] 2fr 1fr";
    document.getElementById('burger').style.display = "inherit"
    document.getElementById('no-burger').style.display = "none"
}