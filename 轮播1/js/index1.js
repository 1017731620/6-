window.onload=function(){
    var lis=document.querySelectorAll(".ul-span li");
    var imgs=document.querySelectorAll(".ul-one li");
    var timer=null;
    var index=1;
    var ulul=document.querySelector(".ul-one");

    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer=setInterval(timeautojia,2000);
    function timeautojia(){
        index++;
        lis[index-2].style.backgroundColor="white";
        if(index>=imgs.length-1){
            index=1;
        }
        ulul.style.left=(-600)*index+"px";
        lis[index-1].style.backgroundColor="blue";

    }
    function timeautojian(){
        index--;
        lis[index].style.backgroundColor="white";
        if(index<1){
            index=imgs.length-2;
        }
        document.querySelector(".ul-one").style.left=(-600)*index+"px";
        lis[index-1].style.backgroundColor="blue";
        
    }
    document.querySelector("div").onmouseover=function(){
        clearInterval(timer);
        timer=null;
    }
    document.querySelector("div").onmouseout=function(){
        timer=setInterval(timeautojia,2000);
    }
    document.getElementById("left-span").onclick=function(){
        timeautojian();
    }
    document.getElementById("right-span").onclick=function(){
        timeautojia();
    }

    for(var i=0;i<lis.length;i++){
        lis[i].in=i;
        lis[i].onclick=function(){
            index=this.in+1;
            for(var j=0;j<lis.length;j++){
                lis[j].style.backgroundColor="white";
            }
            this.style.backgroundColor="blue";
            
            document.querySelector(".ul-one").style.left=(-600)*index+"px";
        }
    }
}