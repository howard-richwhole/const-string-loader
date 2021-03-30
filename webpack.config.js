const path = require('path');

module.exports = {
    entry: './test_target/index.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|css)$/,
                use: [
                    {
                        loader: path.resolve('./loader/main.js'),
                    },
                ],
            },
        ],
    },
};