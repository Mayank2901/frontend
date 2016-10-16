var dashboard={};

dashboard.controller = function(){
	var ctrl = {};
	ctrl.form = 1;
	ctrl.category = m.prop('');
	ctrl.name = m.prop('');
	ctrl.price = m.prop('');
	ctrl.brand = m.prop('');
	ctrl.description = m.prop('');
	ctrl.quantity = m.prop('');
	ctrl.instock = m.prop(false);
	return ctrl;
}

dashboard.Load = function(ctrl){
	return(
		<div class="container" style="height:100%;width: 100%;">
			<div id="menu" style="height: 100%;width: 16%;position: absolute;top: 0;">
				<div class="ui inverted vertical menu" style="height:100%;width:100%" id="menu">
					<a class="item" style="height:130px">
					<br/>
					<h2>FoodWorld</h2>
					</a>
					<a class="active item" data-tab="add_product" onclick={ctrl.activeTab}><i class="write icon"></i>Add Product</a>
					<a class="item" data-tab="numbers" onclick={ctrl.activeTab}> <i class="text telephone icon"></i>Blocked Numbers</a>
					<a class="item" data-tab="all_products" onclick={ctrl.activeTab}><i class="align justify icon"></i>All Products</a>
					<button type="button" style="position: absolute;top:93%;width:100%;" class="ui teal right labeled icon button" onclick={ctrl.logout}>
					<i class="sign out icon"></i>Logout</button>
				</div>
			</div>

			<div class="ui attached active tab segment" data-tab="add_product" style="position: absolute;top: 0;left: 16%;bottom: 0;width:84%;overflow:auto;overflow-y:scroll;">
				<h2 class="ui center aligned icon header">
				  <i class="shop icon"></i>
				  <div class="content">
				    Add Products
				    <div class="sub header">Add all your products from here.</div>
				  </div>
				</h2>
				<div class="ui divider"></div>
					<form class="ui form">
						<div class="two fields">
							<div class="field">
								<label>Category</label>
		    					<input type="text" oninput={m.withAttr('value',ctrl.category)} name="category"/>
							</div>
							<div class="field">
								<label>Name</label>
		    					<input type="text" oninput={m.withAttr('value',ctrl.name)} name="name"/>
							</div>
						</div>
						<div class="two fields">
							<div class="field">
								<label>Price</label>
		    					<input type="text" oninput={m.withAttr('value',ctrl.price)} name="price"/>
							</div>
							<div class="field">
								<label>Brand</label>
		    					<input type="text" oninput={m.withAttr('value',ctrl.brand)} name="brand"/>
							</div>
						</div>
						<div class="two fields">
							<div class="field">
								<label>Description</label>
		    					<input type="text" oninput={m.withAttr('value',ctrl.description)} name="description"/>
							</div>
							<div class="field">
								<label>Quantity</label>
		    					<input type="text" oninput={m.withAttr('value',ctrl.quantity)} name="quantity"/>
							</div>
						</div>
						<div class="two fields">
							<div class="field">
								<div class="ui toggle checkbox">
								  <input type="checkbox" name="instock"/>
								  <label>Product Instock</label>
								</div>
							</div>
							<div class="field">
								<label>Image</label>
	    						<button class="ui right labeled icon button">
								  <i class="arrow up icon"></i>
								  Upload
								</button>
							</div>
						</div>
						<button class="ui primary button">
						  Save
						</button>
					</form>
			</div>
		</div>
	)
}

dashboard.view = function(ctrl){
	return(
		this.Load(ctrl)
	)
}

module.exports = dashboard;