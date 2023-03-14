module.exports = {
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]',
                },
            },
            {
                test: /\.md$/,
                use: 'raw-loader',
            }
        )
        return config
    },
    images: {
        unoptimized: true,
    }
};