window.addEventListener('load', function() {
    
});
function bottomSlide(btn) {
	var btnId = document.getElementById(btn + "Hr"),
		btnW = document.getElementById(btn).offsetWidth;
	btnId.style.opacity = "1.0";
	btnId.style.width = btnW + "px";
	setTimeout( function() {
		btnId.style.width = "0px";
		btnId.style.opacity = "0.0";
	}, 400)
}
function closeMenu() {
    var menu = document.getElementById('navMain');
    setTimeout( function() {
        menu.style.transform = 'translate3d(-250px, 0px, 0px)';
    }, 400)
}
function JSLink(btn) {
    url = document.getElementById(btn).dataset.url
    setTimeout( function() {
        window.location = url
    }, 800)
    
}