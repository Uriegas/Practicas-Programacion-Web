function byId(id) {
   return  typeof id==="string"?document.getElementById(id):id;
}
var index=0,timer=null,banner=byId("banner").getElementsByTagName("div"),len=banner.length,dots=byId("dots").getElementsByTagName("span"),prev=byId("prev"),next=byId("next");
function slideImg() {
    var main=byId("main");
    main.onmouseover=function () {
        if(timer)
            clearInterval(timer);
    };
    main.onmouseout=function () {
        timer=setInterval(function () {
            index++;
            if(index>=len) index=0;
            changeImg();
        }, 1000);
    }
    main.onmouseout();
    for(var d=0;d<len;d++){
        dots[d].id=d;
        dots[d].onclick=function () {
            index=this.id;
            this.className="active";
            changeImg();
        }
    }
    next.onclick=function () {
        index++;
        if(index>=len) index=0;
        changeImg();
    }
    prev.onclick=function () {
        index--;
        if(index<0)
            index=2;
        changeImg();
    }
}
function changeImg() {
    for(var i=0;i<len;i++){
        banner[i].style.display='none';
        dots[i].className="";
    }
    banner[index].style.display='block';
    dots[index].className="active";
}
slideImg();
