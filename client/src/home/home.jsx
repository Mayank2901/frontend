var home={};

//ctrl
home.controller=function(){
	var ctrl={};
	return ctrl
}

home.load=function(ctrl){
	return (
		<div class="container">
			<div class="ui teal three item inverted menu">
			  <a class="active item">
			    Home
			  </a>
			  <a class="item">
			    Messages
			  </a>
			  <a class="item">
			    Friends
			  </a>
			</div>
		</div>
	)
}

home.view=function(ctrl){

	return home.load(ctrl);

}

module.exports= home;