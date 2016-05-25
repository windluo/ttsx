
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'public');

module.exports = {
	
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {

    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: ROOT_PATH,
        filename: '/dist/js/[name]_[hash].js',
        publicPath: ''
    },
    module: {
        loaders: [
            // 解析.vue文件
            { 
                test: /\.vue$/, 
                loader: 'vue' 
            },
            // 转化ES6的语法
            { 
                test: /\.js$/, 
                loader: 'babel', 
                exclude: /node_modules/ 
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
		        test: /\.(png|jpg|gif)$/,
		        loader: 'url-loader?limit=2048&name=/dist/images/[name]_[hash].[ext]'
		    },
            //html模板编译？
            { 
                test: /\.(html|tpl)$/, 
                loader: 'html-loader' 
            }
        ]
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map',

    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: entryarr, //提取哪些模块共有的部分
            minChunks: 3 // 提取至少3个模块共有的部分
        },
        new ExtractTextPlugin("/dist/css/[name].css"),
        new HtmlwebpackPlugin({
            template:'src/tpl/index.html',
            filename: 'index.html',
            chunks: ['index','common'],
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            '/web/api*': {
            	target: 'http://120.24.219.112:8080/',
            	secure: false
            },
            '/public*':{
            	target: 'http://120.24.219.112',
            	secure: false
        	}
        }
    }
};