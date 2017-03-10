var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        "entry": path.resolve(__dirname, 'entry')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[chunkhash:8].[name].min.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js/,
            loaders: ['babel-loader?presets[]=es2015'],
            exclude: /node_modules/
        },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require("autoprefixer")
                                ]
                            }
                        }
                    }
                ],
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.less/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require("autoprefixer")
                                ]
                            }
                        }
                    }],
//                loader: 'style-loader!css-loader!postcss-loader!less-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file-loader'
            }

        ]
    },
//    postcss: [autoprefixer()]


}
