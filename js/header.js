
//头部下拉菜单栏
(function(){
    var dropShop=document.getElementsByClassName("dropMenu-shop")[0];//商城系统下拉菜单栏
    var shopSystem=document.querySelectorAll(".nav>a")[2];//商城系统a标签
    var dropSolution=document.getElementsByClassName("dropMenu-solution")[0];//解决方案下拉菜单栏
    var shopSystem3=document.querySelectorAll(".nav>a")[3];//解决方案a标签
    function clearShop(){//清除商城系统下拉菜单栏class
        dropShop.className="dropMenu-shop";
        shopSystem.style.color="#000"; 
    }
    function clearSolu(){//清除解决方案下拉菜单栏class
        dropSolution.className="dropMenu-solution";
        shopSystem3.style.color="#000";
    }
    function activeShop(){//商城系统激活下拉
        dropShop.className="dropMenu-shop down active";
        shopSystem.style.color="#0A6DEE";
    }
    function activeSolu(){//解决方案激活下拉
        dropSolution.className="dropMenu-solution down active";
        shopSystem3.style.color="#0A6DEE";
    }
    shopSystem.addEventListener("mouseenter",function(){
        activeShop();
        clearSolu();//商城系统下拉时，解决方案隐藏
    });
    shopSystem3.addEventListener("mouseenter",function(){
        activeSolu();
        clearShop();//解决方案下拉时，商城系统隐藏
    });
    dropShop.addEventListener("mouseleave",function(){
        dropShop.className="dropMenu-shop up active";
        setTimeout(function(){ clearShop() },400);//过渡时间0.4s后，dropShop隐藏
    })
    dropSolution.addEventListener("mouseleave",function(){
        dropSolution.className="dropMenu-solution up active";
        setTimeout(function(){ clearSolu() },400);
    })
})();