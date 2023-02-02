const mongoose = require('mongoose');
//const config = import('./default.json')
//const url = config.get('mongoURL');
const url = "mongodb+srv://shreyan:shreyan@cluster0.gikpvkj.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;