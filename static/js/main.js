function activateSidebar(){
	document.querySelector("#sidebar-wrapper").classList.toggle("d-block");
	document.querySelector("body").classList.toggle("overflow-hidden");
	document.querySelector("#sidebar-toggler > button > i").classList.toggle("fa-bars");
	document.querySelector("#sidebar-toggler > button > i").classList.toggle("fa-times-circle");
}