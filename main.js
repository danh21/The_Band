/*-------------------------------------------------------SELECTOR----------------------------------------------*/
const main = document.querySelector('#main')
const liTagNav = document.querySelectorAll('#nav > li')
const aTagNav = document.querySelectorAll('#nav > li > a')
const btn_menu = document.querySelector('.btn-menu');
const icon_expand = document.querySelector('#icon-expand')
const subnav = document.querySelector('#nav li .subnav')
const btns_buy_ticket = document.querySelectorAll('.btn-buy-ticket');
const modal = document.querySelector('.modal')
const modal_ticket = document.querySelector('#modal-ticket')
const btn_close = document.querySelector('#btn-close')
const btn_x = document.querySelector('.btn-x')
var menuIsClosed = true 
var subNavIsClosed = true



/*-------------------------------------------------------FUNCTION-------------------------------------------*/
function hideModal() {
    modal.style.position = 'relative'
    modal_ticket.style.display = 'none'  
}

function showMenu() {   /* except nav HOME*/
    for (var i = 1; i < liTagNav.length; i++) 
        liTagNav[i].style.display = 'block'
}

function hideMenu() {
    if (screen.width < 740) {                       // mobile devices
        for (var i = 1; i < liTagNav.length; i++) 
            liTagNav[i].style.display = 'none'
    }  
}

function showSubNav() {
    if (screen.width < 740) {
        icon_expand.classList.remove('ti-angle-down')
        icon_expand.classList.add('ti-angle-up')
        subnav.style.display = 'block'
    }
}


function hideSubNav() {
    if (screen.width < 740) { 
        icon_expand.classList.remove('ti-angle-up')
        icon_expand.classList.add('ti-angle-down')
        subnav.style.display = 'none'
    }
}



/*-------------------------------------------------HANDLE EVENTS--------------------------------------------*/

/*------------------------------Handle on Header-------------------------------------*/
btn_menu.onclick = function() {
    if (menuIsClosed)
        showMenu()
    else
        hideMenu()
    menuIsClosed = !menuIsClosed
}

for (var i = 1; i < liTagNav.length; i++) {
    if (aTagNav[i].nextElementSibling && aTagNav[i].nextElementSibling.classList.contains('subnav')) {
        liTagNav[i].onclick = function(event) {     // contain subnav       
            event.preventDefault()      // prevent scroll
            event.stopPropagation()     // main.onclick 
            if (subNavIsClosed)
                showSubNav()
            else
                hideSubNav()
            subNavIsClosed = !subNavIsClosed
        } 
    }
    else {                                          // not contain subnav
        liTagNav[i].onclick = function() {
            hideMenu()
            menuIsClosed = true       
        }     
    }  
}

main.onclick = function() {
    hideSubNav()
}

/*-----------------Handle Btns on Modal-------------------------------*/
for (var btn_buy_ticket of btns_buy_ticket) {
    btn_buy_ticket.onclick = function() {
        modal.style.position = 'fixed'
        modal_ticket.style.display = 'block' 
    }
}

btn_close.onclick = hideModal

btn_x.onclick = hideModal

modal.onclick = hideModal 

modal_ticket.onclick = function(event) {
    event.stopPropagation() /*clicking modal_ticket doesn't hide modal*/
}