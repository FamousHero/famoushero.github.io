document.addEventListener('beforeunload', (e)=>{
    window.scrollTo(0,0)
});
(()=>{
    if(history.scrollRestoration){
        history.scrollRestoration = 'manual';
    }
})();