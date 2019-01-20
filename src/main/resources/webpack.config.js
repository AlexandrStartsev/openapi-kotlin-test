var path = require("path");
require('replace-in-file').sync({
    files: './openapi-kotlin-js.meta.js',
    from: /"openapi-kotlin-js"/,
    to: "\"@ostartsev/openapi-kotlin-js\""
});

module.exports = {
    entry: "./openapi-kotlin-js.js",
    output: {
        path: path.resolve(__dirname, "."),
        library: "@ostartsev/openapi-kotlin-js",
        libraryTarget: "umd",
        filename: "openapi-kotlin-js.js",
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