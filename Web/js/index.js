//引入header.html
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
//增值服务
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
        var imgOne=document.querySelector(".banner>img");//轮播第一张图片,用于计算
        var imgs=document.querySelectorAll(".banner>img");//所有的轮播图片
        var list=document.getElementsByClassName("list")[0];//小圆点ul
        var items=document.getElementsByClassName("item");//小圆点li
        var btns=document.querySelectorAll(".banner>button");//点击按钮
        var index=0;//表示第几张图片

        banner.style.height=imgOne.offsetHeight+"px";//让banner的高度等于图片高度,避免banner高度坍塌
        list.style.left=(imgOne.offsetWidth-list.offsetWidth)/2+"px";//计算小圆点的水平居中
        //按钮位置垂直居中
        for(var btn of btns){ btn.style.top=(imgOne.offsetHeight-btn.offsetHeight)/2+"px"; }
        function clearClassName(){//清除img&&item的class
            for(var img of imgs){ img.className=""; }
            for(var item of items){ item.className="item"; }
        }
        function classNameActive(){//img&&item的class添加active
            imgs[index].className="active";
            items[index].className="item active";
        }
        function addIndex(){//index增加
            clearClassName();
            if(index<5) index++;
            else index=0;
        }
        function reduceIndex(){//index减少
            clearClassName();
            if(index>0) index--; 
            else  index=5; 
        }
        function itemChange(){
            clearClassName();
            classNameActive();
        }
        next.addEventListener("click",function(){//下一张
            addIndex();//index++;
            classNameActive();//下一张被激活
        })
        prev.addEventListener("click",function(){//上一张
            reduceIndex();
            classNameActive()
        })
        //小圆点点击
        for(var item of items){
            item.addEventListener("click",function(){
                var item=this;
                var itemIndex=item.getAttribute("data-target");//获取item的data-target属性
                index=itemIndex;
                itemChange();   
            })
        }
        var change=null;
        function autoPlay(){//定义自动轮播函数
            change=setInterval(function(){
                addIndex();
                classNameActive();
            },3000)
        }
        autoPlay();
        //鼠标移入清除定时器
        banner.onmouseenter=function(){
            clearInterval(change);
            $("#prev").css("left","5rem").next().css("right","5rem");
        }
        //鼠标移出调用autoPlay
        banner.onmouseleave=function(){
            autoPlay();
            $("#prev").css("left","-5rem").next().css("right","-5rem");
        }
    })();
//商城系统部分
    (function(){
        var cloudShops=document.getElementsByClassName("cloudShop");
        var shopOthers=document.getElementsByClassName("shopOthers");
        function clear(){
            for(var i=0;i<4;i++){
                shopOthers[i].className="shopOthers"
                cloudShops[i].className="cloudShop none"
            }
        }
        for( var shopOther of shopOthers){
            shopOther.addEventListener("mouseover",function(){
                var key=this.getAttribute("data-key");
                clear();
                cloudShops[key].className="cloudShop active";
                this.className="shopOthers none";    
            })
        }
    })();

//商城小程序
(function(){
 var $wechats=$(".wechat_logo");
    $wechats.mouseover(function(){
        $(this).children("a").css("bottom",0);
    }) 
    $wechats.mouseout(function(){
        $(this).children("a").css("bottom","-3rem");
    })
})();
//解决方案蓝色详情页
//DOMContentLoaded
$(function(){
    $(".solution-img>div").hover(function(){
        $(this).children(".soluBlue").toggleClass("top");
    })
})

//媒体报道图片transform
$(function(){
    $(".media").hover(function(){
        $(this).toggleClass("active");
    })
})
// Ajax异步加载
$(function(){
    var $imgs=$(".img-checked>img:first,.img-unchecked>img:first-child");
    var $divs=$(".img-checked,.img-unchecked");
    $imgs.click(function(){
        $imgs.parent(".img-unchecked").removeClass("active");
        $(this).parent(".img-unchecked").addClass("active")
        //获取自定义属性data-lid
        var lid=$(this).attr("data-lid");
        $.ajax({
            url:"http://localhost:3005/index",
            type:"get",
            data:{lid},
            dataType:"json",
            success:function(data){
                var obj=data[0];
                //动态插入数据
                //图片
                $(".cases-details>img").attr("src",`${obj.src}`);
                //标题
                $(".cases-details>table>tbody th").html(`${obj.title}`);
                 //网址
                 $(".cases-details>table>tbody td").eq(1).html(`${obj.userUrl}`);
                //模式
                $(".cases-details>table>tbody td").eq(3).html(`${obj.mode}`);
                //成果
                $(".cases-details>table>tbody td").eq(5).html(`${obj.achievement}`); 
            }
        })
    })
});

    

