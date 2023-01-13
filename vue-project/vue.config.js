const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) 

module.exports = {
	devServer: {
        proxy: { 
            '/api': { 
                target: 'http://localhost:3000/api/', 
                changeOrigin: true, 
                secure: false,
                pathRewrite:{ "^/api" : '' } 
            } 
        },
		headers: { "Access-Control-Allow-Origin": "*" }
	}
}