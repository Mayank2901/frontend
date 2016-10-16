var routes = {

	"/home": require('module/home/home'),
	"/admin": require('module/home/connects'),
	"/billing": require('module/billing'),
	"/admin/dashboard": require('module/dashboard')
}


m.route(m.mainElement, "/", routes);