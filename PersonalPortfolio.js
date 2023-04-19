// main  menu
const menus = document.getElementsByClassName("menu-item");
// const tab_contents = document.getElementsByClassName("tab_contents");

function changeMenu(cur) {
	for (menu of menus) {
		menu.classList.remove("active");
	}
	cur.classList.add("active");
}

//about section menu
const tab_menu = document.getElementsByClassName("tab_menu");
const tab_contents = document.getElementsByClassName("tab_contents");

function openTab(cur, tabname) {
	for (menu of tab_menu) {
		menu.classList.remove("active_menu");
	}
	for (content of tab_contents) {
		content.classList.remove("active_tab");
	}
	cur.classList.add("active_menu");
	const selected_tab = document.getElementById(tabname);
	selected_tab.classList.add("active_tab");
}

//observer object can identify which ele is on screen visible to user
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});
//we have to say observer to observe fro these ele
const animatedEles = document.querySelectorAll(".animate");
// console.log(animatedEles);
animatedEles.forEach((ele) => {
	// console.log(ele);
	observer.observe(ele);
});

///////////////////
console.log("script is running Good!!");
