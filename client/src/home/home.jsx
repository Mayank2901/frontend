var home={};
require('dimmer');
$( document ).ready(function() {
		console.log('document ready');
    	
	});
//ctrl
home.controller=function(){
	var ctrl={};
	ctrl.gallery = function(element){
		$(element).bxSlider({
		    mode:'fade',
		    pager:true,
		    auto:true
		});
	}
	return ctrl
}

home.load=function(ctrl){
	return (
		<div class="ui grid">
			<div class="ui segments">
				<div class="ui segment">
				<div class="ui grid computer only">
					<div class="ui horizontal segments" style="border:transparent !important;margin-bottom: 0%;width:100%;">
						  <div class="ui center aligned segment" style="border:transparent;padding-bottom: 0%;padding-left: 0%;padding-right: 0%;">
						  	<h1 class ="ui header" style="display:inline-block;"><span style="color:orange;">Food</span><span>World</span></h1>
						  </div>
						  <div class="ui segment" style="border:transparent;">
						  	<h2 class="ui header" style="display:inline-block;margin-top:-0.9%"><i style="display:inline-block;margin-top:-3%" class="mobile icon"></i><span style="color:orange;font-weight:400;">+91 9876543210</span></h2>
						  </div>
						  <div class="ui horizontal segments" style="border:transparent !important;padding-top:0.8%;">
						  	<div class="ui segment" style="border:transparent;">
						  		<h4 class="ui header"><i class="flag icon" style="color:orange;display:inline-block;"></i><span style="display:inline-block;">Nainitaal</span></h4>
						  	</div>
						  	<div class="ui segment" style="border:transparent;">
						  		<a href="javascript:void(0)"><h4 class="ui header"><i class="shop icon" style="color:orange;display:inline-block;"></i><span style="color:bluedisplay:inline-block;">Checkout</span></h4></a>
						  	</div>
						  </div>
						  <div class="ui segment" style="border:transparent;">
						  	<div class="ui input focus" style="width:100%;">
								<input type="text" placeholder="Search..."/>
							</div>
						  </div>
						</div>
				</div>
				</div>
				<div class="ui segment" style="padding:0 0 0 0;margin-top:-1%;">
					<div class="ui grid">
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
					</div>
				</div>
				<div class="ui segment">
					<ul class="bxslider" config={ctrl.gallery}>
					  <li><img class="mySlides" title="fruits" height="400" width="400" src="./images/fruits.jpg" /></li>
					  <li><img class="mySlides" title="fruits" height="400" width="400" src="./images/vegetables.jpg" /></li>
					  <li><img class="mySlides" title="fruits" height="400" width="400" src="./images/grocery.jpeg" /></li>
					</ul>
				</div>
				<div class="ui segment">
					<div class="ui centered grid">
						<div class="twelve wide mobile four wide computer six wide tablet column">
							<div class="row">
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
							<div class="row" style="padding-top:8%;">
								<div class="ui horizontal divider">
									Brands
								</div>
								<div class="ui centered raised card">
									<div class="content">
										<a class="event" style="color:black;">
											Aanchal
											<i style="float:right;" class="shop icon"></i>
										</a>
										<div class="ui clearing divider"></div>
										<a class="event" style="color:black;">
											Cadbury
											<i style="float:right;" class="shop icon"></i>
										</a>
										<div class="ui clearing divider"></div>
										<a class="event" style="color:black;">
											Saafola
											<i style="float:right;" class="shop icon"></i>
										</a>
										<div class="ui clearing divider"></div>
										<a class="event" style="color:black;">
											Aashirvaad
											<i style="float:right;" class="shop icon"></i>
										</a>
										<div class="ui clearing divider"></div>
										<a class="event" style="color:black;">
											Nestle
											<i style="float:right;" class="shop icon"></i>
										</a>
										<div class="ui clearing divider"></div>
										<a class="event" style="color:black;">
											Britania
											<i style="float:right;" class="shop icon"></i>
										</a>
										<div class="ui clearing divider"></div>
										<a class="event" style="color:black;">
											Good Day
											<i style="float:right;" class="shop icon"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="eight wide tablet twelve wide mobile ten wide computer column">
							<div class="ui horizontal divider">
								Products
							</div>
							<div class="ui centered three stackable cards">
							  	<div class="red card">
							  		<div class="center aligned">
							    		<img height="150" width="150" src="./images/fruits.jpg"/>
							    	</div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Fruits</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
								</div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150"  src="./images/vegetables.jpg"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Vegetables</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/grocery.jpeg"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Grocery</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/personalcare3.jpg"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Personal Care</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/dairyproducts.jpg"/>
							    </div>
							    <div class="content"style="text-align:center">
								    <a class="header" style="color:red"><b>Dairy Products</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/beverages.png"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Beverages</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/fruits.jpg"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Fruits</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
								</div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/vegetables.jpg"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Vegetables</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
							  </div>
							  <div class="red card">
							  	<div class="center aligned">
							    	<img height="150" width="150" src="./images/grocery.jpeg"/>
							    </div>
							    <div class="content" style="text-align:center">
								    <a class="header" style="color:red"><b>Grocery</b></a>
								    <button class="tiny ui basic button"><i class="shop icon"></i>Shop Now</button>
							    </div>
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