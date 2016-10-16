var dashboard={};
var auth = require('module/auth');
var _ = require('underscore');

dashboard.controller = function(){
	var ctrl = {};
	ctrl.f = 1;
	ctrl.bl = 1;
	ctrl.category = m.prop('');
	ctrl.name = m.prop('');
	ctrl.price = m.prop('');
	ctrl.brand = m.prop('');
	ctrl.number = m.prop('');
	ctrl.srch_num = m.prop('')
	ctrl.quantity = m.prop('');
	ctrl.instock = m.prop(false);
	ctrl.blocked_num = m.prop([])
	ctrl.err = m.prop('');
	ctrl.loader = m.prop(true);

	auth.PingServer_callback(function(response){
		console.log('here::')
		ctrl.getblocklist = function(){
			var transport = m.prop();
	        m
	        .request({
	            method:"GET",
	            url:m.urls('admin/blocklist'),
	            config: transport,
	            background:true
	        })
	        .then(function(data){});
	        transport().onreadystatechange = function() {
	            var res=JSON.parse(transport().responseText);
	            console.log('res:',res);
	            if (transport().readyState == XMLHttpRequest.DONE) {
	                if(transport().status == 200){
	                	ctrl.loader = m.prop(false);
	                    ctrl.blocked_num = m.prop(res.data.block_list)
	                    console.log('ctrl.blocked_num:',ctrl.blocked_num())
	                    m.redraw(true);
	                }
	                else{
	                	ctrl.loader = m.prop(false);
	                   	ctrl.err = m.prop(res.userMessage);
	                   	$('.modal').empty();
						$( ".modal" ).append('<div class="ui segment">'+res.userMessage+'</div>' );
						$('.modal').modal('show');
	                   	m.redraw(true);
	                }
	            }
	        }
	    }()
	});

	window.onload = function(){
		console.log('here')
		$('#istock').checkbox({
			onChecked: function() {
		      console.log('onChecked called');
		      ctrl.instock = m.prop(true);
		    },
		    onUnchecked: function() {
		      console.log('onUnchecked called');
		      ctrl.instock = m.prop(false);
		    }
		})
		$('#catgry_dd').dropdown({
			onChange: function(value,text){
				ctrl.category = m.prop(value)
			}
		})
	}

	ctrl.activeTab = function(e){
		var datatab=$(e.currentTarget).attr('data-tab');
		var active_datatab=$('.tab.segment.active').attr("data-tab")
		$('.tab.segment.active').removeClass("active");
		$('a[data-tab="'+active_datatab+'"]').removeClass("active");
		$('div[data-tab="'+datatab+'"]').addClass("active");
		$('a[data-tab="'+datatab+'"]').addClass("active");
		//console.log('datatab:',elem.getAttribute( "data-tab" ))
	}

	ctrl.val_submit_prdct = function(){
		console.log('1')
		if (ctrl.f == 1){
			console.log('2')
			$('#products_form').form({
				fields:{
					category:{
						identifier:'category',
						rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter a category.'
	                    }]
					},
					name:{
						identifier:'name',
						rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter a product name.'
	                    }]
					},
					price:{
						identifier:'price',
						rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter a price to continue.'
	                    }]
					},
					brand:{
						identifier:'brand',
						rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter a brand name.'
	                    }]
					},
					quantity:{
						identifier:'quantity',
						rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter a quantity.'
	                    }]
					}
				},
				onSuccess: function(e,f) {
					console.log("onSuccess")
					e.preventDefault();
					ctrl.f=0;
	            	ctrl.submit_prdct();
	            	return
	            },
	            onFailure: function(err,f){
	            	console.log("onFailure");
	            	ctrl.f=0;
	            	return false
	            }
			})
		}
	}

	ctrl.submit_prdct = function(){
		$('#product_btn').addClass('loading');
		ctrl.data={
			category : ctrl.category,
			name : ctrl.name,
			price : ctrl.price,
			brand : ctrl.brand,
			description : ctrl.description,
			quantity : ctrl.quantity,
			instock : ctrl.instock
		}
		console.log('ctrl.data',ctrl.data);
		var transport = m.prop();
		m
		.request({
			method: "POST",
			url: m.urls('admin','product'),
			data: ctrl.data,
			config: transport
		})
		.then(function(data){
		});
		transport().onreadystatechange = function() {
		    // console.log('res:',res);
		    if (transport().readyState == XMLHttpRequest.DONE) {
		    	var res=JSON.parse(transport().responseText);
		    	if(transport().status == 200 ){
				    ctrl.category = m.prop('');
					ctrl.name = m.prop('');
					ctrl.price = m.prop('');
					ctrl.brand = m.prop('');
					ctrl.description = m.prop('');
					ctrl.quantity = m.prop('');
					m.redraw(true)
			    }
				else {
					// console.log('status not 200');
					$('#product_btn').removeClass('loading');
				    $('.modal').empty();
				    $( ".modal" ).append('<div class="ui segment">'+res.userMessage+'</div>' );
				    $('.modal').modal('show');
                    transport().abort();
                    m.redraw(true);
				    return
				}
			}
		}
	}

	ctrl.add_blck_list = function(){
		if(ctrl.bl == 1){
			$('#blck_form').form.settings.rules.number_check=function(){
				console.log('ctrl.number:',ctrl.number());
				var index = _.indexOf(ctrl.blocked_num(),{number: ctrl.number()});
				console.log('index:',index)
				if(index >= 0){
					return false
				}
				else{
					return true
				}
			}
			$('#blck_form').form({
				fields:{
					category:{
						identifier:'number',
						rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter a number.'
	                    },
	                    {
	                    	type: 'number_check',
	                    	prompt: 'Number already present in block list.'
	                    }]
					}
				},
				onSuccess: function(e,f) {
					$('#blck_btn').addClass('loading')
					console.log("onSuccess")
					e.preventDefault();
					ctrl.bl=0;
					ctrl.data ={
						number : ctrl.number()
					}
					var transport = m.prop();
	            	m
					.request({
						method: "POST",
						url: m.urls('admin/blocklist'),
						data: ctrl.data,
						config: transport
					})
					.then(function(data){
					});
					transport().onreadystatechange = function() {
					    var res=JSON.parse(transport().responseText);
					    console.log('res:',res);
					    if (transport().readyState == XMLHttpRequest.DONE) {
					    	if(transport().status == 200 ){
						        $('#blck_btn').removeClass('loading');
							    ctrl.blocked_num().push(res.data.block_list);
							    console.log('ctrl.blocked_num:',ctrl.blocked_num())
								m.redraw(true)
						    }
							else {
								// console.log('status not 200');
								$('#blck_btn').removeClass('loading');
							    $('.modal').empty();
							    $( ".modal" ).append('<div class="ui segment">'+res.userMessage+'</div>' );
							    $('.modal').modal('show');
			                    transport().abort();
			                    m.redraw(true);
							    return
							}
						}
					}
	            },
	            onFailure: function(err,f){
	            	console.log("onFailure");
	            	ctrl.bl=0;
	            	return false
	            }
			})
		}
	}

	ctrl.remove_block = function(e){
		var id = e.currentTarget.id 
		$('#'+id).addClass('loading')
		var transport = m.prop();
		ctrl.data = {
			id : id
		}
		console.log('data:',ctrl.data)
		m
		.request({
			method: "DELETE",
			url: m.urls('admin/blocklist'),
			data: ctrl.data,
			config: transport
		})
		.then(function(data){
		});
		transport().onreadystatechange = function() {
		    var res=JSON.parse(transport().responseText);
		    console.log('res:',res);
		    if (transport().readyState == XMLHttpRequest.DONE) {
		    	if(transport().status == 200 ){
		    		$('#'+id).removeClass('loading');
		    		var index = _.indexOf(ctrl.blocked_num(),{_id:id})
				    ctrl.blocked_num().splice(index,1);
				    console.log('ctrl.blocked_num:',ctrl.blocked_num())
					m.redraw(true)
			    }
				else {
					$('#'+id).removeClass('loading')
					// console.log('status not 200');
					$('#blck_btn').removeClass('loading');
				    $('.modal').empty();
				    $( ".modal" ).append('<div class="ui segment">'+res.userMessage+'</div>' );
				    $('.modal').modal('show');
			        transport().abort();
			        m.redraw(true);
				    return
				}
			}
		}
	}

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

			<div class="ui attached active tab segment" data-tab="add_product" style="position: absolute;top: 0;left: 16%;bottom: 0;width:84%;">
				<h2 class="ui center aligned icon header">
				  <i class="shop icon"></i>
				  <div class="content">
				    Add Products
				    <div class="sub header">Add all your products from here.</div>
				  </div>
				</h2>
				<div class="ui divider"></div>
					<form class="ui form" id="products_form">
						<div class="field">
							<label>Name</label>
		    				<input type="text" oninput={m.withAttr('value',ctrl.name)} name="name"/>
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
						<div class="three fields">
							<div class="field">
								<select class="ui search dropdown" id="catgry_dd">
	  								<option value="">Category</option>
	  								<option class="Vegetables">Vegetables</option>
								  	<option class="Fruits">Fruits</option>
								  	<option class="Pulses">Pulses</option>
								    <option class="Spices">Spices</option>
								    <option class="Wheat & Flours">Wheat & Flours</option>
								    <option class="Oil & Ghee">Oil & Ghee </option>
								    <option class="Rice & Rice Products">Rice & Rice Products</option>
								    <option class="Dry Fruits">Dry Fruits</option>
								    <option class="Tea & Coffee">Tea & Coffee</option>
								    <option class="Salt & Sugar">Salt & Sugar</option>
								    <option class="Biscuits">Biscuits</option>
								    <option class="Noodles">Noodles</option>
								    <option class="Pickles">Pickles</option>
								    <option class="Snacks">Snacks</option>
								    <option class="Jams & Sauces">Jams & Sauces</option>
								    <option class="Ready To Eat">Ready To Eat</option>
								    <option class="Hair Care">Hair Care</option>
								    <option class="Skin Care">Skin Care</option>
								    <option class="Home Care">Home Care</option>
								    <option class="Digestive">Digestive</option>
								    <option class="Health Supplements">Health Supplements</option>
								    <option class="Breads">Breads</option>
								    <option class="Milk">Milk</option>
								    <option class="Paneer">Paneer</option>
								    <option class="Curd">Curd</option>
								    <option class="Butter">Butter</option>
								    <option class="Juices">Juices</option>
								    <option class="Soft Drinks">Soft Drinks</option>
								    <option class="Health Drinks">Health Drinks</option>
  								</select>
							</div>
							<div class="field">
								<div class="ui toggle checkbox" id="istock">
								  <input type="checkbox" name="instock"/>
								  <label>Product Instock</label>
								</div>
							</div>
							<div class="field">
		    					<input type="text" oninput={m.withAttr('value',ctrl.quantity)} name="quantity" placeholder="Quantity"/>
							</div>
						</div>
						<div class="field">
							<label>Image</label>
	    					<button class="ui right labeled icon button">
							  <i class="arrow up icon"></i>
							  Upload
							</button>
						</div>
						<button type="submit" class="ui primary button" id="product_btn" onclick={ctrl.val_submit_prdct}>
						  Save
						</button>
						<div class="ui error message"></div>
					</form>
			</div>
			<div class="ui attached tab segment" data-tab="numbers" style="position: absolute;top: 0;left: 16%;bottom: 0;width:84%;overflow:auto;overflow-y:scroll;">
				<div class="ui inverted segment">
					<form class="ui inverted form" id="blck_form">
						<div class="field">
							<label>Number</label>
				    		<input type="text" oninput={m.withAttr('value',ctrl.number)} name="number"/>
				    	</div>
				    	<div class="field">
				    		<button type="submit" id="blck_btn" class="ui primary button" onclick={ctrl.add_blck_list}>
							  Add to block list
							</button>
				    	</div>
				    	<div class="ui error message"></div>
					</form>
				</div>
				<div class="ui segment" style="background-color:transparent;">
					<table class="ui celled striped table">
					  <thead>
					    <tr>
					    	<th colspan="2">
					      		Blocked Numbers
					    	</th>
					    	<th colspan="1">
					      		<div class="ui fluid category search">
								  <div class="ui icon input">
								    <input class="prompt" type="text" oninput={m.withAttr('value',ctrl.srch_num)}placeholder="Search Number.."/>
								    <i class="search icon"></i>
								  </div>
								  <div class="results"></div>
								</div>
					    	</th>
					  	</tr>
					  </thead>
					  <tbody>
					  {
					  	ctrl.blocked_num().map(function(number){
					  		return(
					  			<tr>
							      <td class="collapsing">
							        {number.number}
							      </td>
							      <td>{number.date.substring(0,number.date.indexOf('T'))}</td>
							      <td class="center aligned collapsing">
							      	<button class="positive ui right labeled icon button" onclick={ctrl.remove_block} id={number._id}>
							      		<i class="checkmark icon"></i>
							      		Remove
							      	</button>
							      </td>
							    </tr>
					  		)
					  	})
					  }
					  </tbody>
					</table>
				</div>
			</div>
			<div class="ui attached tab segment" data-tab="all_products" style="position: absolute;top: 0;left: 16%;bottom: 0;width:84%;overflow:auto;overflow-y:scroll;">
				all_product
			</div>
			<div class="ui modal">
			</div>
		</div>
	)
}

dashboard.view = function(ctrl){
	return(
		ctrl.loader() ? require('module/loader') : this.Load(ctrl)
	)
}

module.exports = dashboard;