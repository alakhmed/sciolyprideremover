// Make script execution wait until jQuery has loaded
function defer(method) {
	if (window.jQuery) {
		method();
	} else {
		setTimeout(function() { defer(method) }, 50);
	}
}

// Reverts site logo back to normal
document.getElementById("site-logo").src = "/src/img/logo/logo.png";


// Removes rainbow animation when you hover over the logo by nuking its id (step 1)
const logo = document.getElementById('site-logo');
console.log(logo.getAttribute('id')); // logo-1
logo.setAttribute('id', 'looper');
console.log(logo.getAttribute('id')); // should be "looper"

document.addEventListener('DOMContentLoaded', function load() {
    if (!window.jQuery) return setTimeout(load, 50);
	// Removes that pesky animation script (thanks jQuery) (step 2)
	const peskyscript = $("script:contains(hover)");
	peskyscript.attr("id", "ultimatedestruction");
	const thefinalstep = document.getElementById('ultimatedestruction');
	thefinalstep.remove();
}, false);


// Keeps the logo nice and pride-free constantly
setInterval(function() {
    const logoline = document.getElementById('looper');
	logoline.setAttribute('src', '/src/img/logo/logo.png');
}, );


console.log('Treatment Successful');
