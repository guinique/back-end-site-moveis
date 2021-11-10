const env = process.env.NODE_ENV || 'dev'

const config = () => {
    switch(env){
        case 'dev':
            return {
                bd_string : "mongodb+srv://admin:Lpagi0IbqzIZDdPn@clusterapi.jj3um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
                jwt_pass : 'lalala',
                jwt_expiresIn: '7d'
            }
        case 'hml':
            return {
                bd_string : "mongodb+srv://admin:Lpagi0IbqzIZDdPn@clusterapi.jj3um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
                
            }
        case 'prod':
            return {
                bd_string : "mongodb+srv://admin:Lpagi0IbqzIZDdPn@clusterapi.jj3um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
                
            }
    }
}

console.log(`Iniciando API em ambiente ${env.toUpperCase()}`)

module.exports = config()