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