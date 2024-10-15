const jsonserver=require('json-server')

const mediaPlayerServer=jsonserver.create()

const middlewear= jsonserver.defaults()

const router=jsonserver.router('db.json')

const PORT = 4000 || process.env.PORT

mediaPlayerServer.use(middlewear)

mediaPlayerServer.use(router)

mediaPlayerServer.listen((PORT),()=>{
    console.log(`port running successfully at ${PORT}`);
    
})

