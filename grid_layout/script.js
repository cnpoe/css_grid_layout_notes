function openNavBar() {
  console.log('open')
  let content = document.querySelector('body')
  if (content.classList.contains('animate')) {
    content.classList.remove('animate')
  } else {
    content.classList.add('animate')
  }
  document.getElementById('burger').style.display = "none"
  document.getElementById('no-burger').style.display = "inherit"
  // document.getElementsByTagName('body')[0].style.
  //   gridTemplateColumns = "290px [col-main] 2fr 1fr";
}

function collapseNavBar() {
  console.log('close')
  let content = document.querySelector('body')
  if (content.classList.contains('animate')) {
    content.classList.remove('animate')
  } else {
    content.classList.add('animate')
  }
  document.getElementById('burger').style.display = "inherit"
  document.getElementById('no-burger').style.display = "none"
  // document.getElementsByTagName('body')[0].style.
  //   gridTemplateColumns = "70px [col-main] 2fr 1fr";
}