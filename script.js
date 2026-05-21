const btn = document.querySelector("#btn");

const fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function () {
  fileinp.click();
})

fileinp.addEventListener("input", function (info) {
  //console.log(info)
  //console.log(info.target.value)
  //console.dir(info.srcElement.files[0].name);
  const file = info.srcElement.files[0];

  if (file) {
    btn.textContent = file.name;
  }
})