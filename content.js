window.onload = function(event){
	
    if(document.domain == "twitch.tv"){
        s();
        console.log("Init!");
    }
}

function g(){
    var i = 0;
    var d = document.getElementsByTagName('button');
    var l = d.length;

    while(l >= i){
        if(d[i].outerHTML == '<button class="tw-button tw-button--success tw-interactive"><span class="tw-button__text" data-a-target="tw-core-button-label-text"><div class="claimable-bonus__icon tw-flex"><div class="tw-align-items-center tw-icon tw-inline-flex"><div class="tw-aspect tw-aspect--align-top"><div class="tw-aspect__spacer" style="padding-bottom: 100%;"></div><svg class="tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z" clip-rule="evenodd"></path></g></svg></div></div></div></span></button>'){
            d[i].click();
            console.log("Clicked!");
        }

        i++;
    }
}

function s(){
    setInterval(function(){
        g();
    }, 15000)
}