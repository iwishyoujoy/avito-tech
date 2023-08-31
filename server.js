const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://www.freetogame.com',
    changeOrigin: true,
    onProxyRes: (proxyRes, req, res) => {
      proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001';
    },
  })
);

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
