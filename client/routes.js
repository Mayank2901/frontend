var routes = {

	"/": require('module/home/index'),
	"/signup": require('module/home/connect'),
	"/login": require('module/home/login'),
	"/billing": require('module/billing')
}


m.route(m.mainElement, "/", routes);