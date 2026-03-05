//start cycleCol(), then repeat each 8500 ms
cycleCol();
setInterval(cycleCol, 8500);


function cycleCol () {
	console.log("gfhjg")
	document.querySelectorAll(".title span").forEach(function (el, i) {
		setTimeout(function (){
			//console.log(getComputedStyle(el)["color"])
			if (getComputedStyle(el)["color"] == "rgb(251, 255, 235)") {
				el.style.color = "#316eff";
			} else {
				el.style.color = "#fbffeb"
			}
		}, i * 500);
	});
}

