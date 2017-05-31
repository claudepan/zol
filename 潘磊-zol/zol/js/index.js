//动态创建ad
ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list;
	var l = arr.length;
	
	for( var i=0;i<l;i++){
		var o = arr[i];
		
		
		var m = document.getElementsByClassName("main-list")[0];
		var li = document.createElement("li");
		m.appendChild(li);
		
		var name = document.createElement("h5");
		li.appendChild(name);
		name.className = "name";
		
		var title = document.createElement("a");
		name.appendChild(title);
		title.href = "show.html";
		title.innerHTML = o.title;
		
		var price = document.createElement("p");
		li.appendChild(price);
		price.innerHTML = o.price;
		price.className = "price";
		
		var pic = document.createElement("a");
		li.appendChild(pic);
		pic.className = "pic";
		
		var oimg = document.createElement("img");
		pic.appendChild(oimg);
		oimg.src = "img/"+o.img;
	}
})
//动态创建 团购
ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list1;
	var l = arr.length;
	
	for( var i=0;i<l;i++){
		var o = arr[i];
		
		var bdpic = document.getElementsByClassName("bd-pic")[i];
		var img = document.createElement("img");
		bdpic.appendChild(img);
		img.src = "img/"+o.img;
		
		var title = document.getElementsByClassName("bd-title")[i];
		var a = document.createElement("a");
		title.appendChild(a);
		a.innerHTML = o.title;
		a.href = "show.html";
		
		var bdprice = document.getElementsByClassName("bd-price")[i];
		var span = document.createElement("span");
		bdprice.appendChild(span);
		span.innerHTML = o.discount;
		
		var bddiscount = document.getElementsByClassName("bd-discount")[i];
		bddiscount.innerHTML = o.price;
		
	}
		
})
//选项卡
$(document).ready(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find(".item").hide();
		$(tabtit).find("li:first").addClass("cur").show(); 
		$(tab_conbox).find(".item:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("cur").siblings("li").removeClass("cur"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	$.jqtab("#c-tabs","#c-tabboxs","mouseenter");
	$.jqtab("#s-tabs","#s-tabboxs","mouseenter");
});

//动态创建热卖
ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list4;
	var l = arr.length;
	
	for( var i=0;i<l;i++){
		var o = arr[i];
		
		var list = document.getElementsByClassName("mobile-hot-list")[0];
		var li = document.createElement("li");
		list.appendChild(li);
		
		var a = document.createElement("a");
		li.appendChild(a);
		a.href = "show.html";
		a.className = "rm-pic";
		
		var img = document.createElement("img");
		a.appendChild(img);
		img.src = "img/"+o.img ;
		
		var name = document.createElement("h4");
		li.appendChild(name);
		name.className = "rm-name";
		
		var title = document.createElement("a");
		name.appendChild(title);
		title.innerHTML = o.title;
		
		var detaile = document.createElement("div");
		li.appendChild(detaile);
		detaile.className = "mobile-hot-detail"
		
		var price = document.createElement("span");
		detaile.appendChild(price);
		price.className = "price";
		price.innerHTML = o.price;
	}
})
//
ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list2;
	var l = arr.length;
	var p = document.getElementsByClassName("product-series")[0];
	
	create(0,l,p,arr);
})

ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list3;
	var l = arr.length;
	var p = document.getElementsByClassName("product-series")[1];
	
	create(0,l,p,arr);
})
ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list2;
	var l = arr.length;
	var p = document.getElementsByClassName("product-series")[2];
	
	create(0,l,p,arr);
})
ajax.get("date.json",function(str){
	obj = JSON.parse(str);
	var arr = obj.list3;
	var l = arr.length;
	var p = document.getElementsByClassName("product-series")[3];
	
	create(0,l,p,arr);
})