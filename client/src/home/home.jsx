var home={};
require('dimmer');
$( document ).ready(function() {
		console.log('document ready');
    	
	});
//ctrl
home.controller=function(){
	var ctrl={};
	return ctrl
}

home.load=function(ctrl){
	return (
		<div class="ui centered grid">
			<div class="computer only row">
			  <div class="five wide column">
			  	FoodWorld
			  </div>
			  <div class="six wide column"></div>
			  <div class="five wide column">testing</div>
			</div>
			<div class="computer only row">
				<div class="ui teal seven item inverted borderless menu">
				  <a class="item">
				    Vegetables
				  </a>
				  <a class="item">
				    Fruits
				  </a>
				  <div class="ui simple dropdown item">
				  	Grocery
				    <i class="dropdown icon"></i>
				    <div class="menu">
				      <a class="item">Pulses</a>
				      <a class="item">Spices</a>
				      <a class="item">Wheat & Flours</a>
				      <a class="item">Oil & Ghee </a>
				      <a class="item">Rice & Rice Products</a>
				      <a class="item">Dry Fruits</a>
				      <a class="item">Tea & Coffee</a>
				      <a class="item">Salt & Sugar</a>
				    </div>
				  </div>
				  <div class="ui simple dropdown item">
				  	Packaged Foods
				    <i class="dropdown icon"></i>
				    <div class="menu">
				      <a class="item">Biscuits</a>
				      <a class="item">Noodles</a>
				      <a class="item">Pickles</a>
				      <a class="item">Snacks</a>
				      <a class="item">Jams & Sauces</a>
				      <a class="item">Ready To Eat</a>
				    </div>
				  </div>
				  <div class="ui simple dropdown item">
				  	Personal Care
				    <i class="dropdown icon"></i>
				    <div class="menu">
				      <a class="item">Hair Care</a>
				      <a class="item">Skin Care</a>
				      <a class="item">Home Care</a>
				      <a class="item">Digestive</a>
				      <a class="item">Health Supplements</a>
				    </div>
				  </div>
				   <div class="ui simple dropdown item">
				  	Dairy Products
				    <i class="dropdown icon"></i>
				    <div class="menu">
				      <a class="item">Breads</a>
				      <a class="item">Milk</a>
				      <a class="item">Paneer</a>
				      <a class="item">Curd</a>
				      <a class="item">Butter</a>
				    </div>
				  </div>
				  <div class="ui simple dropdown item">
				  	Beverages
				    <i class="dropdown icon"></i>
				    <div class="menu">
				      <a class="item">Juices</a>
				      <a class="item">Soft Drinks</a>
				      <a class="item">Health Drinks</a>
				    </div>
				  </div>
				</div>
			</div>
			<div class="fifteen wide mobile five wide computer six wide tablet column">
				<div class="ui horizontal divider">
					Category
				</div>
				<div class="ui centered raised card">
					<div class="content">
						<a class="event" style="color:black;">
							VEGETABLES
							<i style="float:right;" class="shop icon"></i>
						</a>
						<div class="ui clearing divider"></div>
						<a class="event" style="color:black;">
							FRUITS
							<i style="float:right;" class="shop icon"></i>
						</a>
						<div class="ui clearing divider"></div>
						<a class="event" style="color:black;">
							GROCERY
							<i style="float:right;" class="shop icon"></i>
						</a>
						<div class="ui clearing divider"></div>
						<a class="event" style="color:black;">
							PACKAGED FOODS
							<i style="float:right;" class="shop icon"></i>
						</a>
						<div class="ui clearing divider"></div>
						<a class="event" style="color:black;">
							PERSONAL CARE
							<i style="float:right;" class="shop icon"></i>
						</a>
						<div class="ui clearing divider"></div>
						<a class="event" style="color:black;">
							DAIRY PRODUCTS
							<i style="float:right;" class="shop icon"></i>
						</a>
						<div class="ui clearing divider"></div>
						<a class="event" style="color:black;">
							BEVERAGES
							<i style="float:right;" class="shop icon"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="eight wide tablet fifteen wide mobile ten wide computer column">
				<div class="ui horizontal divider">
					Products
				</div>
				<div class="ui centered three stackable cards">
				  <div class="red card">
				    <img height="150" width="100%" src="./images/fruits.jpg"/>
				    <div class="content" style="text-align:center">
					    <a class="header" style="color:red"><b>Fruits</b></a>
					    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
					</div>
				  </div>
				  <div class="red card">
				    <img height="150" width="100%" src="./images/vegetables.jpg"/>
				    <div class="content" style="text-align:center">
					    <a class="header" style="color:red"><b>Vegetables</b></a>
					    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
				    </div>
				  </div>
				  <div class="red card">
				    <img height="150" width="100%" src="./images/grocery.jpeg"/>
				    <div class="content" style="text-align:center">
					    <a class="header" style="color:red"><b>Grocery</b></a>
					    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
				    </div>
				  </div>
				  <div class="red card">
				    <img height="150" width="100%" src="./images/personalcare3.jpg"/>
				    <div class="content" style="text-align:center">
					    <a class="header" style="color:red"><b>Personal Care</b></a>
					    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
				    </div>
				  </div>
				  <div class="red card">
				    <img height="150" width="100%" src="./images/dairyproducts.jpg"/>
				    <div class="content"style="text-align:center">
					    <a class="header" style="color:red"><b>Dairy Products</b></a>
					    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
				    </div>
				  </div>
				  <div class="red card">
				    <img height="150" width="100%" src="./images/beverages.png"/>
				    <div class="content" style="text-align:center">
					    <a class="header" style="color:red"><b>Beverages</b></a>
					    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
				    </div>
				  </div>
				</div>
			</div>
		</div>
	)
}

home.view=function(ctrl){

	return home.load(ctrl);

}

module.exports= home;