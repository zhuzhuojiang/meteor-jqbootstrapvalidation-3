Package.describe({
	summary: "Latest version jqBootstrapValidation with bootrap 3"
});

Package.on_use(function (api){
	api.use('jquery', 'client');
	api.use('bootstrap-3', 'client');
	api.add_files('lib/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.6.js', 'client');
});
