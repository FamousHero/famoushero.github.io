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
var currShowcaseButton = document.getElementById('showcase1');
var firstShowcase = document.querySelector('#Projects .inner-section .flexbox-container');
function autoScroll(index){
    let previndex = index-1;
    if(previndex < 1)
        previndex = 3;
    document.getElementById('showcase'+previndex).classList.remove('checked');
    document.getElementById('showcase'+index).classList.add('checked');
    transformFlexbox(index);
    currShowcaseButton = document.getElementById('showcase'+index);
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
        currShowcaseButton.classList.remove('checked');
        currShowcaseButton = button;
        button.classList.add('checked');
        let index = button.dataset.showcase;
        transformFlexbox(index);
        clearTimeout(showcaseTimeoutID);
        showcaseTimeoutID = setTimeout(autoScroll, 4000, button.dataset.nextShowcase);
    })
});

function transformFlexbox(index){
    firstShowcase.style.transform = 'translate(0,' + (-500 * (Number(index)-1)) + 'px)';
}
/*
#showcase1:checked  ~ div.first{
    margin-top: 0;
}
#showcase2:checked ~ div.first{
    margin-top: -450px;
}
#showcase3:checked ~ div.first{
    margin-top: -900px;
}
#showcase4:checked ~ div.first{
    margin-left: 0;
}
*/