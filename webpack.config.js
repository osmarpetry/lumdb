const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { GenerateSW } = require('workbox-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        sourceMapFilename: '[name].[contenthash].js.map',
        chunkFilename: '[name][chunkhash].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            react: path.resolve(__dirname, 'node_modules', 'react'),
            '@horas': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(j)sx?$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(gif|png|jpg|jpeg)$/i,
                use: ['file-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        overlay: true,
        port: 8080
    },
    plugins: [
        new WebpackPwaManifest({
            filename: 'manifest.json',
            short_name: 'LUMB',
            name: 'LUMB',
            description: 'LUMB - Lastest movies',
            theme_color: '#000000',
            background_color: '#000000',
            display: 'standalone',
            scope: '/',
            start_url: '/',
            icons: [
                {
                    src: path.resolve('public/icon-512x512.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                }
            ]
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CompressionPlugin({
            cache: true,
            algorithm: 'gzip',
            compressionOptions: { level: 9 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new Dotenv(),
        new GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('googleapis'),
                    handler: 'StaleWhileRevalidate'
                }
            ]
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            minChunks: 2,
            maxInitialRequests: Infinity,
            minSize: 0
        }
    }
}
