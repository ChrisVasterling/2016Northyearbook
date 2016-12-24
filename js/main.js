window.addEventListener('load', function() {
    addBackButton()
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
    var menu = document.getElementById('navMain'),
        bdy = document.getElementById('body');
    setTimeout( function() {
        bdy.style.overflow = 'auto'
        menu.style.transform = 'translate3d(-250px, 0px, 0px)';
        closeMenuCover();
    }, cover_delay)
}
function openMenu() {
    var menu = document.getElementById('navMain'),
        bdy = document.getElementById('body');
    bdy.style.overflow = 'hidden';
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
function JSLink(btn, IntExt, delay) {
    if (IntExt == 'external') {
        var url = document.getElementById(btn).dataset.url;
        setTimeout( function() {
            window.location = url
        }, delay)
    } else if (IntExt == 'newTab') {
        var url = document.getElementById(btn).dataset.url;
        window.open(url)
    } else if (IntExt == 'back') {
        window.history.back()
    } else if (IntExt == 'internal') {
        var location = document.getElementById(btn).dataset.linkId,
            section = document.getElementById(location).offsetTop;
        setTimeout( function() {
            window.scrollTo(0, section);
        }, delay)
    };
    
}
window.addEventListener('scroll', function() {
    var content = document.getElementById('content'),
        seasonButtons = document.getElementById('seasonButtons');
    if (window.scrollY >= content.offsetTop) {
        document.getElementById('backToTop').style.display = 'block';
    } else {
        document.getElementById('backToTop').style.display = 'none';
    }
});
function addBackButton() {
    var header = document.getElementById('header'),
        back = document.createElement('button');
    back.setAttribute('class', 'backButton');
    back.setAttribute('id', 'backButton');
    back.setAttribute('onclick', "JSLink(this.id, 'back', 150)");
    back.style.float = 'right';
    back.innerHTML = 'Back';
    header.appendChild(back)
}