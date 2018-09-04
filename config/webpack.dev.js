//入口  输出  loaders  插件  模式
const HWP = require('html-webpack-plugin')
const CWP = require('copy-webpack-plugin')
const webpack = require('webpack');
const SplitChunksPlugin = webpack.optimize.SplitChunksPlugin;
let config = {
    mode:  process.env.NODE_ENV, //production
    entry: {
        main: ["@babel/polyfill", "./src/main.js"],
        //vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        filename: '[name].js',
        path: process.cwd() + '/dist'
    },
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HWP({
            title: 'hoogoo',
            template: './tpl/index.html'
        }),
        new CWP([{
            from: './src/assets',
            to: "./dist/assets"
        }])
    ],
    devServer: {
        historyApiFallback: true,
        port: 9000,
        open: true
    },
    devtool: process.env.NODE_ENV=="development"?'cheap-module-eval-source-map':'',
    optimization:{
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /(react|react-dom|react-router-dom)/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.concat([

    ])
}

module.exports = config