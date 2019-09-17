module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/information-security/' : '/',
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    transpileDependencies: ['vuetify']
}