var billing = {};

//CTRL
billing.controller = function() {
	var ctrl = {};
	ctrl.ErrorMsg = m.prop("");
	return ctrl;
}



billing.form = function(ctrl) {

	return (
		<div class="ui container">
			<h4 class="ui horizontal divider header" style="background-color:white">
				<i class="tag icon"></i>
				Order Description
			</h4>
			<div class="ui segment" id="left" style="position:absolute;left:10%;width:39%;height:75%;">
			</div>
			<div class="ui segment" id="right" style="position:absolute;left:52%;width:39%;height:75%;">
					<div class="ui form">
						<h4 class="ui dividing header">Shipping Information</h4>
					      <div class="field">
					        <label>Phone</label>
					        <input placeholder="Phone" type="text"/>
					      </div>
					      <div class="field">
					        <label>Name</label>
					        <input placeholder="Name" type="text"/>
					      </div>
					      <div class="field">
					        <label>Email</label>
					        <input placeholder="Email" type="text"/>
					      </div>
					      <div class="field">
					        <label>Address</label>
					        <textarea rows="2" cols="1"/>
					      </div>
					    <h4 class="ui dividing header"></h4>
					    <button class="ui button" style="background-color:rosybrown;">Submit</button>
					</div>
			</div>
		</div>
	)
}

billing.view = function(ctrl) {

	return billing.form(ctrl) 
}



module.exports = billing;