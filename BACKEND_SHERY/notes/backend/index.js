const app = require('./src/app');
const dotenv = require('dotenv');
const connectDB = require('./src/db/connectsDB');
dotenv.config();
const PORT = process.env.PORT || 4000;

connectDB()
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});