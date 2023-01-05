//#region Page Setup
document.addEventListener('beforeunload', (e)=>{
    window.scrollTo(0,0)
});
(()=>{
    if(history.scrollRestoration){
        history.scrollRestoration = 'manual';
    }
})();

//#endregion


//#region Functions and Factory Functions

/**
 * 
 * @param {HTMLElement} startButton 
 * @param {string} type 
 * @param {HTMLElement} flexContainer 
 * @returns 
 */
var buttonHandlerProto = {
    createEventListeners(buttonElements){
        buttonElements.forEach(button => {
            button.addEventListener('click', ()=>{
                this.currentButton.classList.remove('checked');
                this.currentButton = button;
                button.classList.add('checked');
                this.index = button.dataset.showcase;
                this.transformFlexbox(this.index);
                clearTimeout(this.TimeoutID);
                //functions are objects so calling a function within a function
                //makes this refer to global, solve this by binding this to current object
                this.TimeoutID = setTimeout(this.autoScroll.bind(this), 4000, button.dataset.nextShowcase);
            })
        })
    },
    autoScroll(index){
        let previndex = index-1;
        if(previndex < 1)
            previndex = this.maxButtons;
        document.getElementById(this.type+previndex).classList.remove('checked');
        
        document.getElementById(this.type+index).classList.add('checked');
        this.transformFlexbox(index);
        this.currentButton = document.getElementById(this.type+index);
        //need to refer to the global variable and set it to local+1
        this.index = parseInt(index)+1;
        if(this.index > this.maxButtons)
            this.index = 1;
        this.TimeoutID = setTimeout(this.autoScroll.bind(this), 4000, this.index);
    },
    transformFlexbox(index){
        this.flexContainer.style.transform = 'translate(0,' + (-33 * (Number(index)-1)) + '%)';
    }
}

/**
 * 
 * @param {HTMLElement} startButton 
 * @param {string} type 
 * @param {HTMLElement} flexContainer 
 * @param {Number} maxButtons 
 * @returns 
 */
function ButtonHandler(startButton, type, flexContainer, maxButtons){
    let currentButton = startButton;
    let TimeoutID = null;
    let index = 2;

    return Object.assign(Object.create(buttonHandlerProto),{type, flexContainer, maxButtons, currentButton, TimeoutID, index});

}
/** 
 * @param {string} type
 * @param {string} id
 * @return {ButtonHandler}
 */
function createHandler(type, containerID, maxButtons){
    let startButton = document.getElementById(type+'1');
    let container = document.querySelector(containerID+ ' .inner-section .flexbox-container');
    return ButtonHandler(startButton, type, container, maxButtons)
}

//#endregion

var showcaseButtons = document.querySelectorAll('.showcase-button');
var showcaseHandler = createHandler('showcase', '#Projects', showcaseButtons.length);
showcaseHandler.createEventListeners(showcaseButtons);
showcaseHandler.autoScroll(1);

/* TODO: only needs buttons when screen width too small,
 * also need to make the translate depend on divs in flexContainer

var odinButtons = document.querySelectorAll('.odin-button');
var odinHandler = createHander('odin', '#TOP-Projects', odinButtons.length);
odinHandler.createEventListeners(odinButtons);
odinHandler.autoScroll(1);
console.log(odinHandler);
console.log(showcaseHandler);
*/

