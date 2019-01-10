//引入header.html
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
})

//解决方案
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

