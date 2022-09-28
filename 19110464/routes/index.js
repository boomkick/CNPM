const homeRouter = require('./home.route');
const _19110464Router = require('./19110464.route');
const messageRouter = require('./message.route');
const logMiddleware = require('../middleware/log.middleware')

function route(app) {
    app.use('/', logMiddleware , homeRouter)
    app.use('/19110464', logMiddleware , _19110464Router)
    app.use('/message', logMiddleware , messageRouter)
}

module.exports = route