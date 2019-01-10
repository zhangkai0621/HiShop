//引入header.html
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

//解决方案
(function(){
    var serImgs=document.querySelectorAll(".serImg");  
    var checFatherDns=document.querySelectorAll(".checFatherDn"); 
    for(var checFatherDn of checFatherDns){
        checFatherDn.onmouseover=function(){
            var checFatherDn=this;
            var serImg=checFatherDn.firstElementChild;
            serImg.className="serChecked"; 
            checFatherDn.className="checFather";
        }
        checFatherDn.onmouseout=function(){
            var checFatherDn=this;
            var serImg=checFatherDn.firstElementChild;
            serImg.className="serImg";
            checFatherDn.className="checFatherDn";
        }
    }
})();
//banner轮播图
    (function(){
       var banner=document.getElementsByClassName("banner")[0];
       console.log(banner)
       var i=1;
       function change(){
            if(i==6) i=1; 
            if(i<6){
                i++;
                console.log(i);
                banner.style.background=`url(img/banner${i}.jpg) no-repeat`;
                banner.className="banner banChange";   
            }
            //banner.className="banner";  
       }
       var clear=setInterval(change,3000);
    //    banner.onmouseover=function(){
    //        clearInterval(clear);
    //    }
    })();

