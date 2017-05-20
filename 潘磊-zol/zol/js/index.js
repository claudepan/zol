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
		title.href = "#";
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
		a.href = "#";
		
		var bdprice = document.getElementsByClassName("bd-price")[i];
		var span = document.createElement("span");
		bdprice.appendChild(span);
		span.innerHTML = o.discount;
		
		var bddiscount = document.getElementsByClassName("bd-discount")[i];
		bddiscount.innerHTML = o.price;
		
//		var b = document.getElementsByClassName("rush-list")[0];
//		var li = document.createElement("li");
//		b.appendChild(li);
//		
//		var bdpic = document.createElement("a");
//		li.appendChild(bdpic);
//		bdpic.href = "#";
//		bdpic.className = "bd-pic";
//		
//		var img = document.createElement("img");
//		bdpic.appendChild(img);
//		img.src = "img/"+o.img;
//		
//		var word = document.createElement("div");
//		li.appendChild(word);
//		word.className = "word";
//		
//		var bdtitle = document.createElement("h4");
//		word.appendChild(bdtitle);
//		bdtitle.className = "bd-title";
//		
//		var a = document.createElement("a");
//		bdtitle.appendChild(a);
//		a.innerHTML = o.title;
//		
//		var bdprice = document.createElement("p");
//		word.appendChild(bdprice);
//		bdprice.innerHTML = "抢购价：<span>"+o.discount+"</span>";
//		bdprice.className = "bd-price";
//		
//		var discount = document.createElement("p");
//		word.appendChild(discount);
//		discount.innerHTML = "原价："+o.price;
//		discount.className = "bd-discount";
//		
//		var operation = document.createElement("div");
//		word.appendChild(operation);
//		operation.innerHTML = "<span class='save'>立省￥50</span><a href='#' class='buy-btn'>抢购</a>"
//		operation.className = "operation clearfix";
//		
//		var countdown = document.createElement("div");
//		li.appendChild(countdown);
//		countdown.className = "countdown";
//		countdown.setAttribute("endtime","1495418400");
		
	}
		
})
