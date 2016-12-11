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
function closeMenu(cover_delay) {
    var menu = document.getElementById('navMain');
    setTimeout( function() {
        menu.style.transform = 'translate3d(-250px, 0px, 0px)';
        closeMenuCover();
    }, cover_delay)
}
function openMenu() {
    var menu = document.getElementById('navMain');
    menu.style.transform = 'translate3d(0px, 0px, 0px)';
    openMenuCover();
}
function closeMenuCover() {
    cvr = document.getElementById('cover');
    cvr.style.backgroundColor = 'transparent';
    setTimeout( function () {
        cvr.style.display = 'none';
    }, 300)
}
function openMenuCover() {
    cvr = document.getElementById('cover');
    cvr.style.display = 'block';
    setTimeout( function () {
        cvr.style.backgroundColor = 'rgba(0, 0, 0, .75)';
    }, 0)
}
function JSLink(btn) {
    url = document.getElementById(btn).dataset.url
    setTimeout( function() {
        window.location = url
    }, 800)
    
}