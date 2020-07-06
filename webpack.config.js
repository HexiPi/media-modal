var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/MediaModal.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'MediaModal.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ],
    }
}