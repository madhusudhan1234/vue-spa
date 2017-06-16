var webpack = require('webpack');
var path = require('path');
const isProduction = (process.env.NODE_ENV === 'production');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: [
			'./scripts/main.js',
			'./scss/main.scss'
		]
    },
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	},
	module: {
        rules: [
        	{
            	test: /\.s[ac]ss$/,
            	use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
        	},
            {
            	test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
	},

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

	plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.LoaderOptionsPlugin({
            minimize: isProduction,
        }),
    ]
}
if(isProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compress: {
                warnings: false
            }
        })
    );
};
