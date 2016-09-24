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
		<div class="ui grid">
			<div class="sixteen wide column">
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
			<div class="six wide column">
				<div class="ui horizontal divider">
					Category
				</div>
			</div>
			<div class="ten wide column">
				<div class="ui horizontal divider">
					Products
				</div>
				<div class="ui three stackable cards">
				  <div class="card">
				    <div class="image" >
				      <img src="./images/fruits.jpg"/>
				    </div>
				    <div class="content">
				    	<div class="center" style="text-align:center">
					    	<a class="header" style="color:red"><b>Fruits</b></a>
					    	<div class="meta">
					    		<span class="sub-heading">Fresh Fruits</span>
					    		<br/>
					    		<button class="ui small basic button"><i class="shop icon"></i>Shop Now</button>
					    	</div>
				    	</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="image" style="background-color: white;">
				      <img src="./images/vegetables.jpg"/>
				    </div>
				    <div class="content">
				    	<div class="center" style="text-align:center">
					    	<a class="header" style="color:red"><b>Vegetables</b></a>
					    	<div class="meta">
					    		<span class="sub-heading">Fresh Vegetables</span>
					    		<br/>
					    		<button class="ui small basic button"><i class="shop icon"></i>Shop Now</button>
					    	</div>
				    	</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="image" style="background-color: white;">
				      <img src="./images/grocery.jpeg"/>
				    </div>
				    <div class="content">
				    	<div class="center" style="text-align:center">
					    	<a class="header" style="color:red"><b>Grocery</b></a>
					    	<div class="meta">
					    		<span class="sub-heading">Quality Products</span>
					    		<br/>
					    		<button class="ui small basic button"><i class="shop icon"></i>Shop Now</button>
					    	</div>
				    	</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="image" style="background-color: white;">
				      <img src="./images/personalcare3.jpg"/>
				    </div>
				    <div class="content">
				    	<div class="center" style="text-align:center">
					    	<a class="header" style="color:red"><b>Personal Care</b></a>
					    	<div class="meta">
					    		<span class="sub-heading">Personal Care</span>
					    		<br/>
					    		<button class="ui small basic button"><i class="shop icon"></i>Shop Now</button>
					    	</div>
				    	</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="image">
				      <img src="./images/dairyproducts.jpg"/>
				    </div>
				    <div class="content">
				    	<div class="center" style="text-align:center">
					    	<a class="header" style="color:red"><b>Dairy Products</b></a>
					    	<div class="meta">
					    		<span class="sub-heading">Dairy Products</span>
					    		<br/>
					    		<button class="ui small basic button"><i class="shop icon"></i>Shop Now</button>
					    	</div>
				    	</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="image">
				      <img src="./images/beverages.png"/>
				    </div>
				    <div class="content">
				    	<div class="center" style="text-align:center">
					    	<a class="header" style="color:red"><b>Beverages</b></a>
					    	<div class="meta">
					    		<span class="sub-heading">Beverages</span>
					    		<br/>
					    		<button class="ui small basic button"><i class="shop icon"></i>Shop Now</button>
					    	</div>
				    	</div>
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