var menu = document.querySelector('.menu');

var menuIcon = document.querySelector('.responsive-nav');

menuIcon.addEventListener("click", function(){
    menu.classList.toggle('respond');
});

if(document.querySelector('.accessible-table')){
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
    
        // var acc_menu = '<svg class="acc-button" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 88.1 88.2" enable-background="new 0 0 88.1 88.2" xml:space="preserve"><g id="XMLID_15_"><line id="XMLID_18_" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="76.1" y1="12.6" x2="44.1" y2="12.6"/><line id="XMLID_17_" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="76.1" y1="44.1" x2="12.1" y2="44.1"/><line id="XMLID_16_" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="76.1" y1="75.6" x2="28.5" y2="75.6"/></g></svg>';
        var acc_menu_increase = '<svg class="acc-button-increase" viewBox="0 0 70 70"><defs><style>.cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="3" y="3" width="64" height="64"/><line class="cls-1" x1="67" y1="35" x2="3" y2="35"/></g></g></svg>'
        var acc_menu_decrease = '<svg class="acc-button-decrease" viewBox="0 0 70 70"><defs><style>.cls-1{fill:none;stroke:#000333;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="3" y="3" width="64" height="64"/><line class="cls-1" x1="67" y1="24.33" x2="3" y2="24.33"/><line class="cls-1" x1="67" y1="45.67" x2="3" y2="45.67"/></g></g></svg>'
        var acc_menu_contrast = '<svg class="acc-button-contrast" viewBox="0 0 70 70"><defs><style>.cls-1{fill:none;stroke:#000333;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="35" cy="35" r="32"/><line class="cls-1" x1="35" y1="4.09" x2="35" y2="65.91"/></g></g></svg>'
        document.querySelector('.display-row').innerHTML += acc_menu_increase;
        document.querySelector('.display-row').innerHTML += acc_menu_decrease;
        document.querySelector('.display-row').innerHTML += acc_menu_contrast;        
    
        document.querySelector('.acc-button-increase').addEventListener("click", function(){
            document.querySelector('.accessible-table').classList.toggle('acc-respond-increase');
        }); 
        document.querySelector('.acc-button-decrease').addEventListener("click", function(){
            document.querySelector('.accessible-table').classList.toggle('acc-respond-decrease');
        });
        document.querySelector('.acc-button-contrast').addEventListener("click", function(){
            document.querySelector('.accessible-table').classList.toggle('acc-respond-contrast');
        });   
}