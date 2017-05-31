function create(lmin,lmax,place,arr){
		for ( var i=lmin ;i<lmax ;i++) {
			var o = arr[i];
			
			var li = document.createElement("li");
			place.appendChild(li);
			
			var a = document.createElement("a");
			li.appendChild(a);
			a.className = "p-pic";
			a.href = "show.html";
			
			var img = document.createElement("img");
			a.appendChild(img);
			img.src = "img/"+o.img;
			
			var h5 = document.createElement("h5");
			li.appendChild(h5);
			h5.className = "name";
			
			var title = document.createElement("a");
			h5.appendChild(title);
			title.href = "show.html";
			title.innerHTML = o.title;
			
			var product = document.createElement("div");
			li.appendChild(product);
			product.className = "product-detail clearfix";
			
			var price = document.createElement("span");
			product.appendChild(price);
			price.className = "price";
			price.innerHTML = "￥"+o.price;
			
		}
}