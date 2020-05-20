// module.exports = {

//     googleClientID:"1068709557372-2in05q00pn02nkrm9jjt152kv70hiqhg.apps.googleusercontent.com",
//     googleClientSecret:"ofmAVt4_-kn_TEc6s1bmDUPM"
// }


if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}