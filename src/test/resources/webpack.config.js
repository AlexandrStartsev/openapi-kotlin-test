var path = require("path");

module.exports = {
    target: 'node',
    entry: "./openapi-kotlin-js-tests.js",
    resolve: {
        modules: [ "node_modules" ],
        alias: {
            kotlin: path.resolve(__dirname, 'node_modules/kotlin'),
            '@ostartsev/openapi-kotlin-js': path.resolve(__dirname, '../js')
        }
    },
    mode: "development",
	optimization: {
		minimize: false
	},
	devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    }
};