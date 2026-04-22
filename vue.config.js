const { defineConfig } = require('@vue/cli-service')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

const PRODUCT_SERVICE_URL = process.env.VUE_APP_PRODUCT_SERVICE_URL || 'http://localhost:3002/'
const ORDER_SERVICE_URL = process.env.VUE_APP_ORDER_SERVICE_URL || 'http://localhost:3000/'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: 'all',
    client: false,
    webSocketServer: false,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      devServer.app.use(bodyParser.json())

      // Health check
      devServer.app.get('/health', (_, res) => {
        const version = process.env.APP_VERSION || '0.1.0'
        res.send({ status: 'ok', version })
      })

      // Proxy products request to product-service
      devServer.app.get('/products', async (_, res) => {
        try {
          const response = await fetch(PRODUCT_SERVICE_URL)
          const products = await response.json()
          res.send(products)
        } catch (error) {
          console.log(error)
          res.status(500).send({ message: 'Failed to fetch products' })
        }
      })

      // Proxy order submission to order-service
      devServer.app.post('/order', async (req, res) => {
        try {
          const response = await fetch(ORDER_SERVICE_URL, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-Type': 'application/json' }
          })

          if (response.status === 201) {
            res.sendStatus(200)
          } else {
            res.sendStatus(response.status)
          }
        } catch (error) {
          console.log(error)
          res.sendStatus(500)
        }
      })

      return middlewares
    }
  }
})