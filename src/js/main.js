const refferelDiv = document.getElementById('refferalCode');
const reffCode = 'WITCHER';

refferelDiv.addEventListener('click', function () {
  let cb = document.getElementById("cb");
  cb.value = reffCode.toString();
  cb.style.display = 'block';
  cb.select();
  document.execCommand('copy');
  cb.style.display = 'none';

  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + cb.value;
});


refferelDiv.addEventListener('mouseout', function () {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";

});


/* Paralax */


let scene = document.getElementById('scene');
let parallax = new Parallax(scene);