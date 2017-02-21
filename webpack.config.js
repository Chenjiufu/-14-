module.exports = {
    entry: {
        "entry": "./entry"
    },
    output: {
        path: "build",
        filename: 'js/[chunkhash:8].[name].min.js',
        chunkFilename: 'js/[chunkhash:8].build.min.js',
        publicPath: ''
    },
    module: {
        loaders: [{
            test: /\.js/,
            loaders: ['babel-loader?presets[]=es2015'],
            exclude: /node_modules/
        },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
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
                loader: 'style-loader!css-loader!less-loader',
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
    }
}