var routes = {

	"/": require('module/home/index'),
	"/home": require('module/home/home'),
	"/signup": require('module/home/connect'),
	"/login": require('module/home/login'),
	"/billing": require('module/billing')
}


m.route(m.mainElement, "/", routes);