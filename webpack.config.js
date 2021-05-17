// const
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// vendor
const VENDOR_LIBS = [
    "react",
    "react-dom",
    "react-router-dom",
    "axios",
    "redux",
    "react-redux",
    "redux-thunk",
    "redux-saga",
    "yup",
    "formik"
];

//devServer
const devServer = {
    port: 8000,
    open: false,
    stats: 'minimal',
    disableHostCheck: true,
    historyApiFallback : true,
    overlay : true,
    inline : true,
    compress : true,
    contentBase : '/',
};

// Development or Production
const is_prod = process.env.ENVIRONMENT === 'production';

// Config
const config = {
    // entry
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS,
        // async: 'babel-polyfill'
    },
//output
    output: {
        filename: 'static/[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
//devtool
    devtool: 'source-map',
// module
    module: {
        rules: [

            // file js
            {
                use: ['babel-loader'/*, 'eslint-loader'*/],
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },

            // file scss css sass
            {
                use: [
                    // When being is_prod, it will use 'style-loader': css will be injected into multiple <style></style>, it works faster
                    is_prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    {loader: 'css-loader', options:{sourceMap: true}},
                    {loader: 'sass-loader'}
                ],
                test: /\.(c|sa|sc)ss$/
            },

            // image video svg
            {
                loader: 'file-loader',
                test: /\.(png|svg|jpe?g|gif|woff2?|eot|ttf|wav|mp3|mp4|ico)$/,
                options: {
                    outputPath: 'static/images_icons'
                }
            },
        ]
    },

// plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].min.css',
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'image/favicon.svg'
        }),

        new CleanWebpackPlugin(),
        
        new Dotenv({
            path: '.env',
        }),
    ],

// performance
    performance: {
        hints: false
    },
// optimization
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
// devServer
    devServer,
// mode
    mode: is_prod ? 'production' : 'development',
};

module.exports = config;