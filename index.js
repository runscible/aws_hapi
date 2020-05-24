'use strict'

const Hapi = require('@hapi/hapi')

const PORT = 3000
const init = async () => {
    const server = Hapi.server({
        port: PORT,
        host: '0.0.0.0'
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return 'index page'
        }
    })

    server.route({
       method: 'GET',
       path: '/home',
       handler: () => {
           return 'home page '
       }        
    })

    server.route({
        method: 'GET',
        path: '/about',
        handler: (req, res) => {
            return 'about page '
        }
    })

    server.route({
        method: 'GET',
        path: '/contact',
        handler: (req, res) => {
            return 'contact page'
        } 
    })
    await server.start()
    console.log(`server running on ${PORT} `)
}

process.on('unhandledRejection', () => {
    console.error(`HAY UN PUTO ERROR ${err}`)
    process.exit(1)
})

init()