function cycleCol () {
	console.log("gfhjg")
	document.querySelectorAll(".title span").forEach(function (el, i) {
		setTimeout(function (){
			if (getComputedStyle(el)["color"] == "#316eff") {
				el.style.color = "#fbffeb";
			} else {
				el.style.color = "#316eff"
			}
		}, i * 500);
	});
}

var i = 0;

setTimeout(cycleCol, 8500)