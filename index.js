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
                this.initAutoScroll = false;
                clearTimeout(this.TimeoutID);
                if(!iframeMonitor){
                    iframeMonitor = monitorFunction();
                    activeIFrame.contentWindow.postMessage(JSON.stringify({event: 'command', func: 'pauseVideo', args: ''}), '*');
                }
                //functions are objects so calling a function within a function
                //makes this refer to global, solve this by binding this to current object
                this.TimeoutID = setTimeout(this.autoScroll.bind(this), 14000, button.dataset.nextShowcase);
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
        this.TimeoutID = setTimeout(this.autoScroll.bind(this), 7000, this.index);
    },
    transformFlexbox(index){
        this.flexContainer.style.transform = 'translate('+(-33.33 * (Number(index)-1)) + '%,0)';
    }
}
function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
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
    let initAutoScroll = true;

    return Object.assign(Object.create(buttonHandlerProto),{initAutoScroll, type, flexContainer, maxButtons, currentButton, TimeoutID, index});

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
function monitorFunction(){
    return setInterval(()=>{
        let elem = document.activeElement;
        if (elem && elem.tagName == 'IFRAME'){
            clearTimeout(showcaseHandler.TimeoutID);
            clearInterval(iframeMonitor);
            iframeMonitor = null;
            activeIFrame = elem;
        }
    }, 100);
}
var iframeMonitor = monitorFunction();
var activeIFrame = null;
showcaseHandler.createEventListeners(showcaseButtons);

var odinButtons = document.querySelectorAll('.odin-button');
var odinHandler = createHandler('odin', '#TOP-Projects', odinButtons.length);
odinHandler.createEventListeners(odinButtons);
//touchstart intercepted on iOS when clicking iframe
//results in continuted autoscroll so just toggle it when not iOS
if(!iOS()){
    showcaseHandler.autoScroll(1);
}

/* TODO: only needs buttons when screen width too small,
* also need to make the translate depend on divs in flexContainer
*/

odinHander.initAutoScroll && setTimeout(()=>odinHandler.autoScroll(1), 2000);

