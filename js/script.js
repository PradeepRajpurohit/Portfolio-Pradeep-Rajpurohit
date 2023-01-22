let showskill = document.getElementById("showskill");
let showeducation = document.getElementById("showedu");
let tablinks = document.getElementsByClassName("tab-link");
let tabcontents = document.getElementsByClassName("tab-content");
// let skill = document.getElementById("skill");
// let education = document.getElementById("education");

showskill.addEventListener('click', function() {opentab("skill")});
showeducation.addEventListener("click", function() {opentab("education")});

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let menubtn = document.getElementById("menu-btn");
// let close = document.getElementById("close-btn");

menubtn.addEventListener("click", function () {
    document.getElementsByClassName("nav")[0].classList.toggle("active");
})
// close.addEventListener("click", function () {
//     document.getElementsByClassName("nav")[0].classList.toggle("active");
// })
// window.addEventListener("click", function () {
//     document.getElementsByClassName("nav")[0].classList.remove("active");
// })




  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
