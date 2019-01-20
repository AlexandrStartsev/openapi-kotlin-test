var path = require("path");

module.exports= {
    entry: [
        "./openapi-kotlin.js"
    ],
    output: {
        path: path.resolve(__dirname, "."),
        //library: "@ostartsev/openapi-kotlin",
        libraryTarget: "umd",
        filename: "openapi-kotlin.js",
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    resolve: {
        modules: [ "node_modules" ],
        alias: {
            'kotlinx-serialization-runtime-js': path.resolve(__dirname, '../kotlinx-serialization-runtime-js/kotlinx-serialization-runtime-js.js')
        }
    },
    externals: {
        'kotlin': 'kotlin'
    },
    mode: "production",
	optimization: {
		minimize: true
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