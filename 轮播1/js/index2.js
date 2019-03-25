window.onload=function(){
    var imgs=document.querySelectorAll(".ul-one li");
    var lis=document.querySelectorAll(".ul-span li");
    var index=0;
    var timer=null;
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer=setInterval(imgxianshi,2000);
    function imgxianshi(){
        index++;
        if(index>imgs.length-1){
            index=0;
        }
        spanclick(index);
    } 
    function imgyingcang(){
        index--;
        if(index<0){
            index=imgs.length-1;
        }
        spanclick(index);
    }
    document.getElementById("left-span").onclick=throttle(function(){
        imgyingcang();
    },600);
    function throttle(fn,wait){
        var lastTime=0;
        return function(){
            var that=this;
            var nowTime=new Date();
            if(nowTime-lastTime>=wait){
                fn.apply(that,arguments);
                lastTime=nowTime;
            }
        }
    }
    document.getElementById("right-span").onclick=throttle(function(){
        imgxianshi();
    },600);
    document.querySelector("div").onmouseover=function(){
        clearInterval(timer);
        timer=null;
    }
    document.querySelector("div").onmouseout=function(){
        timer=setInterval(imgxianshi,2000);
    }
    for(var i=0;i<lis.length;i++){
        lis[i].in=i;
        lis[i].onclick=function(){
            spanclick(this.in);
        }
    }
    function spanclick(suoyin){
        for(var j=0;j<imgs.length;j++){
            imgs[suoyin].classList.remove("show");
            imgs[j].classList.add("hide");
            lis[j].classList.remove("orange");
            lis[j].classList.add("white");
        }
        imgs[suoyin].classList.remove("hide");
        imgs[suoyin].classList.add("show");
        lis[suoyin].classList.remove("white");
        lis[suoyin].classList.add("orange");
    } 
}