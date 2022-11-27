//DEPENDENCIES:
import express from 'express';
import * as dotenv from 'dotenv';
import { TwitterAPI} from 'twitter-api-v2';


//INTERNAL MODULES:
import authOptions from './helpers/auth.twitter';

//APP INSTANCES:
const app = express();


//APP SETTINGS:
app.use ( express.json() );
app.use ( express.urlencoded ( { extended: true } ));

//ENVIRONMENTS:
dotenv.config ();

//TWITTER CLIENT:
const twitterCLient = new TwitterAPI ( authOptions);


//ENDPOINTS:
app.get ( '/', ( req, res) => {
    const twitterCLientData = twitterCLient.v2;
    console.log ( twitterCLientData);
    res.json ( twitterCLientData);
})

//START SERVER:
app.listen (process.env.PORT, () => {
    console.log ( `SERVER RUNNING ON PORT: ${process.env.PORT}` );
});