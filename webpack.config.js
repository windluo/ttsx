
var webpack = require('webpack');
var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'public');

module.exports = {
	
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH + '/index.js',
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: DIST_PATH,
        filename: 'msg.js',
        publicPath: '/public/'
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.less/, loader: 'style!css!autoprefixer!less'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer!less'
        }
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
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};