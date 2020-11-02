import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	mode: "development",
	resolve: {
		extensions: ["*", ".js", ".jsx", ".json"],
	},
	devtool: "source-map",
	entry: [path.resolve(__dirname, "dist")],
	target: "web",
	output: {
		path: path.resolve(__dirname, "src"),
		publicPath: "/",
		filename: "bundle.js",
	},
	plugins: [
    //eliminate duplicate packages when generating bundle
    // new webpack.optimize.DedupePlugin(),
		//minify JS
		new webpack.config.optimization.minimize,
    // new webpack.optimize.UglifyJsPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: false,
			debug: true,
			noInfo: true, // set to false to see a list of every file being bundled.
		}),
		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: "src/index.html",
			inject: true,
		}),
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
		],
	},
};
