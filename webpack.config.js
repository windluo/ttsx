
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

//先来删了原来生成的文件
var fs = require('fs');
var deleteFolderRecursive = function(patharr){
    for(var i = 0; i < patharr.length; i++){
        var path = patharr[i];
        var files = [];
        if( fs.existsSync(path) ) {
            files = fs.readdirSync(path);
            files.forEach(function(file,index){
                var curPath = path + "/" + file;
                if(fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    }
}([DIST_PATH+'/js',DIST_PATH+'/css',DIST_PATH+'/images']);


var entry = {
    index: APP_PATH+'/js/index.js',
    fundslists: APP_PATH+'/js/fundslists.js',
    funds: APP_PATH+'/js/funds.js',
    managerCompanyList: APP_PATH+'/js/managerCompanyList.js',
    managerCompany: APP_PATH+'/js/managerCompany.js',
    news: APP_PATH+'/js/news.js',
    newslist: APP_PATH+'/js/newslist.js',
    aboutUs: APP_PATH+'/js/aboutus.js',
    announcement: APP_PATH+'/js/announcement.js',
    mreport: APP_PATH+'/js/mreport.js',
    qreport: APP_PATH+'/js/qreport.js',
    questionnaire: APP_PATH+'/js/questionnaire.js',
    meetingList: APP_PATH+'/js/meetingList.js',
    meeting: APP_PATH+'/js/meeting.js'
}

var entryarr = [];
for(var i in entry){
	if(entry.hasOwnProperty(i)){
		entryarr.push(i);
	}
}

var plugins = [];

plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'common', // 将公共模块提取，生成名为`vendors`的chunk
        chunks: entryarr, //提取哪些模块共有的部分
        minChunks: 3 // 提取至少3个模块共有的部分
    })
);

plugins.push(new ExtractTextPlugin("/dist/css/[name]_[hash].css"));

for(var i in entry){
    if(entry.hasOwnProperty(i)){
        plugins.push(new HtmlwebpackPlugin({template:'src/tpl/'+i+'.html',filename: i+'.html',chunks: [i,'common'],minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true //删除空白符与换行符
        }}));
    }
}
plugins.push(new webpack.NoErrorsPlugin());//允许错误不打断程序

module.exports = {
	
    resolve: {  // 显示指出依赖查找路径
	    alias: {
	        comps: 'src/pages/components'
	    }
	},
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: entry,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: ROOT_PATH,
        filename: '/dist/js/[name]_[hash].js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
		        test: /\.(png|jpg|gif)$/,
		        loader: 'url-loader?limit=2048&name=/dist/images/[name]_[hash].[ext]'
		    },
            {   
                test: /\.ejs$/, 
                loader: "ejs-loader?variable=data" 
            }
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: plugins,
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