document.addEventListener('beforeunload', (e)=>{
    window.scrollTo(0,0)
});
(()=>{
    if(history.scrollRestoration){
        history.scrollRestoration = 'manual';
    }
})();

var index = 2;
var showcaseTimeoutID = null;
function autoScroll(index){
    document.getElementById('showcase'+index).checked = true;
    //need to refer to the global variable and set it to local+1
    this.index = parseInt(index)+1;
    if(this.index > 3)
        this.index = 1;
    showcaseTimeoutID = setTimeout(autoScroll, 4000, this.index);
}
showcaseTimeoutID = setTimeout(autoScroll, 4000, index);
var showcaseButtons = document.querySelectorAll('.manual-button');
showcaseButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        clearTimeout(showcaseTimeoutID);
        showcaseTimeoutID = setTimeout(autoScroll, 4000, button.dataset.nextShowcase);
    })
});
