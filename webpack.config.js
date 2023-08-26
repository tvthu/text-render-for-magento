const path = require("path");
const source = path.resolve(__dirname, "src");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/js/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 8081,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                include: source,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, "src"),
                    from: "*.html",
                },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            // For `html-minifier-terser`:
            new HtmlMinimizerPlugin(),
        ],
    },
};
