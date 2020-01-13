const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const incstr = require('incstr');

function createUniqueIdGenerator() {
  const index = {};
  const generateNextId = incstr.idGenerator({
		prefix: 'pp_',
    alphabet: '0123456789'
  });

  return (name) => {
    if (index[name]) {
      return index[name];
    }
    index[name] = generateNextId();
    return index[name];
  };
};

const uniqueIdGenerator = createUniqueIdGenerator();

function generateScopedName(localName) {
	return uniqueIdGenerator(localName);
}

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: path.join(__dirname, 'src/app.js'),
	context: path.resolve(__dirname, 'src'),
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, 'build')
	},
	devServer: {
		open: false,
		port: 8088,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: false,
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							['react-css-modules', {
								context: path.resolve(__dirname, 'src'),
								filetypes: {
									'.scss': {
										syntax: 'postcss-scss'
									}
								},
								generateScopedName
							}]
						]
					}
				}
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(scss|sass|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// only enable hot in development
							hmr: process.env.NODE_ENV === 'development',
							// if hmr does not work, this is a forceful method.
							reloadAll: true,
						},
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								getLocalIdent: (context, localIdentName, localName) => {
									return generateScopedName(localName);
								}
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.html'),
			cache: true,
			showError: true
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	]
};
