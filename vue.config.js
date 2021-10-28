const { name } = require('./package')
const path = require("path"); 
module.exports = {
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		port: 8082
	},
	configureWebpack: {
		output: {
			library: `${name}-[name]`,
			libraryTarget: 'umd'
		},
		resolve: {
			alias: {
				"@": path.join(__dirname, "./src"),
			},
	    }
	},
	publicPath: 'http://localhost:8082'
}