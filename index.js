const generateHtml = (pageName)=>{
    return `
    <div id="clouds">

    <div class="cloud x1"></div>
    <div class="cloud x1_5"></div>
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class="cloud x4"></div>
    <div class="cloud x5"></div>
    <div class="c">
        <div class="_404">404</div>
        <hr/>
        <div class="_1"> Get Back work</div>
        <div class="_2"> studing > ${pageName}</div>
    
    </div>
    
    </div>

    
    `



}

switch(window.location.hostname){
    case "www.youtube.com":
       
        alert("you are in youtube");
    break;
    case "www.facebook.com":
        alert("you are in facebook");
    break; case "www.linkedin.com":
    alert("you are in linkedin");
break;

}