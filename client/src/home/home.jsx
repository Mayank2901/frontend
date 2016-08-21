var home={};
$('.ui.dropdown')
  .dropdown()
;
//ctrl
home.controller=function(){
	var ctrl={};
	return ctrl
}

home.load=function(ctrl){
	return (
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
	)
}

home.view=function(ctrl){

	return home.load(ctrl);

}

module.exports= home;