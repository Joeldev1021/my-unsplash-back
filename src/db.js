const mongoose = require('mongoose');

const API_URL= `mongodb+srv://${process.env.API_USERNAME}:${process.env.API_PASSWORD}@cluster0.cozdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(API_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> {console.log('Connected to MongoDB')})
.catch(err => {console.log('Error:', err.message)})

module.exports = mongoose;