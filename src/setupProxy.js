// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080',
      // target: 'http://mozi-page-builder.mozi.k2.test.wacai.info/mozi/question',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': ''
      }
    })
  );
  // app.use(
  //   proxy('/api', {
  //     target: 'http://aaa:1000',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   })
  // );
  // app.use(
  //   proxy('/xxx', {
  //     target: 'http://bbb:2000',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/xxx': ''
  //     }
  //   })
  // );
};
