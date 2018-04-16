// @flow

import compression from 'compression'
import express from 'express'
import { Server } from 'http'
import socketIO from 'socket.io'

import routing from './routing'
import { STATIC_PATH, WEB_PORT } from '../shared/config'
// import { helloEndpointRoute } from '../shared/routes'
import { isProd } from '../shared/util'
// import renderApp from './render-app'
import setUpSocket from './socket'

const app = express()
// flow-disbale-next-line
const http = Server(app)
const io = socketIO(http)
setUpSocket(io)

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

// app.get('/', (req, res) => {
//   res.send(renderApp(APP_NAME))
// })
// app.get(helloEndpointRoute(), (req, res) => {
//   res.json({ serverMessage: `Hello from the server! (received ${req.params.num})` })
// })

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
