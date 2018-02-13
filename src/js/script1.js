var menu = document.querySelector('.menu');

var menuIcon = document.querySelector('.responsive-nav');

menuIcon.addEventListener("click", function(){
    menu.classList.toggle('respond');
});

function AddBefore(rowId){
    var child = document.querySelector('.accessible-table').childNodes[1].childNodes[1].previousElementSibling;
    var newElement = document.createElement('tr');
    child.parentNode.insertBefore(newElement, child);
    return newElement.classList.add('display-row');
}

AddBefore();

function AddAfter(rowId){
    var target = document.querySelector('.accessible-table');
    var newElement = document.createElement('tr');

    target.parentNode.insertBefore(newElement, target.nextSibling );
    return newElement;
}

AddAfter();

var acc_menu = '<svg class="acc-button" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 88.1 88.2" enable-background="new 0 0 88.1 88.2" xml:space="preserve"><g id="XMLID_15_"><line id="XMLID_18_" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="76.1" y1="12.6" x2="44.1" y2="12.6"/><line id="XMLID_17_" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="76.1" y1="44.1" x2="12.1" y2="44.1"/><line id="XMLID_16_" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="76.1" y1="75.6" x2="28.5" y2="75.6"/></g></svg>';

document.querySelector('.display-row').innerHTML = acc_menu;

document.querySelector('.acc-button').addEventListener("click", function(){
    document.querySelector('.accessible-table').classList.toggle('acc-respond');
});