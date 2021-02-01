import express from'express'
import morgan from 'morgan'

class Server {
        private app: express.Application
        constructor(){
                this.app=express()
                this.config()
             }

        config(){
            this.app.set('port',process.env.PORT||3000)
            this.app.use(morgan('dev')) //Paraquemuestrelasurlinvocadas
    }
    
    routes(){}
    
    start(){this.app.listen(this.app.get('port'),
    ()=>{
        console.log(`Serveronport:${this.app.get('port')}`)
    })
}
}

const server= new Server()
server.start()