const mongoose = require ('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://girishv694:8762331996@cluster0.l8qod.mongodb.net/Ewaste?retryWrites=true&w=majority')
}
module.exports = connect;