// Reverts site logo back to normal
document.getElementById("site-logo").src = "/src/img/logo/logo.png";

// Removes rainbow animation when you hover over the logo
const logo = document.getElementById('site-logo');
console.log(logo.getAttribute('id')); // logo-1
logo.removeAttribute('id');
console.log(logo.getAttribute('id')); // null
