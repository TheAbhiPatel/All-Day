import app from './app'
import 'dotenv/config'
import env from './utils/validateEnv'
import mongoose from 'mongoose';

const port = env.PORT || 3001;

mongoose.connect(env.MONGO_URL)
.then(() =>{
    console.log('Database connected...')
    app.listen(port, () => {
        console.log(`server is runnig at : http://localhost:${port}`)
    })
})
.catch((error) => console.log(error))






