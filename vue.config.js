module.exports = {
publicPath: "",
configureWebpack: {
    optimization: {
        splitChunks: false
    },
output: {
    filename: 'auth.js'
    }
},
css: {
    extract: {
    filename: 'auth.css'
    }
},
filenameHashing: false
}
