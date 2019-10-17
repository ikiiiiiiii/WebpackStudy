const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry:  './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        contentBase: 'src',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { 
                test: /\.(jpg|png|gif|bmp|jpeg)$/, 
                use:  'url-loader?limit=10000&name=../images/[name].[ext]'
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    performance: {
        // hints: false,
        hints:'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
        	return assetFilename.endsWith('.js');
        }
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}