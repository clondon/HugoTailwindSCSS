const themeDir = __dirname + '/../../';
module.exports = {    
    plugins: [   
        require('postcss-import')({
            path: [themeDir]
            }), 
        require('tailwindcss')(themeDir + 'assets/scss/tailwind.config.js'),
        require('tailwindcss')(themeDir + 'assets/src/tailwind/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
    ]
}
