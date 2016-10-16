var Home={};

Home.controller = function(){

	var ctrl = {};
	ctrl.login=1;
	ctrl.email=m.prop('');
	ctrl.password=m.prop('');
	ctrl.validate_login = function(){
		if(ctrl.login==1){
			$('#login_form').form({
				fields:{
					email:{
						identifier:'email',
						rules:[
							{
								type:'empty',
								prompt:'Please enter a email'
							},
							{
								type:'email',
								prompt:'Please enter a valid email.'
							}
						]
					},
					password:{
						identifier:'password',
						rules:[
							{
								type:'empty',
								prompt:'Password cannot be empty'
							},
							{
								type:'minLength[8]',
								prompt:'Password minimum length is 8 characters'
							},
							{
								type:'maxLength[80]',
								prompt:'Password maximum length is 80 characters'
							}
						]
					}
				},
				onSuccess: function(e,f){
					ctrl.login=0;
					ctrl.data={
						email: ctrl.email(),
						password: ctrl.password()
					}
					var transport = m.prop();
					m.request({
						method:'POST',
						url: m.urls('/users/session'),
						data:ctrl.data,
						config:transport
					})
					then(function(data){

					});
					transport().onreadystatechange = function(){
						var res=JSON.parse(transport().responseText);
						if(transport.readyState == XMLHttpRequest.DONE){
							if(transport().status == 200){
								m.route('/home')
								m.redraw(true)
								return
							}
							else{
								$('#login_err').empty();
								$('#login_err').append("<p>"+res.userMessage+"</p>")
								$('#login_err').show();
								return
							}
						}
					}
				},
				onFailure: function(err,f){
					ctrl.login=0;
					return false
				}
			});
		}
	}
	return ctrl;
}

Home.Load = function(ctrl){
	return(
		<div class="ui three column center aligned grid">
		  <div class="column four wide form-holder" style="margin-top:10%;">
		    <h2 class="center aligned header form-head">Sign in</h2>
		    <div class="ui form" id="login_form">
		      <div class="field">
		        <input type="text" name="username" placeholder="username" oninput={m.withAttr('value',ctrl.username)} value={ctrl.username()}/>
		      </div>
		      <div class="field">
		        <input type="password" name="password" placeholder="password" oninput={m.withAttr('value',ctrl.password)} value={ctrl.password()}/>
		      </div>
		      <div class="field">
		        <input type="submit" onclick={ctrl.validate_login} value="sign in" class="ui button large fluid green"/>
		      </div>
		      <div class="ui error message" id="login_err"></div>
		    </div>
		  </div>
		</div>
	)
}

Home.view = function(ctrl){
	return (
		this.Load(ctrl)
	)
}

module.exports = Home;