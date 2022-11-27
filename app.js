//DEPENDENCIES:
import express from 'express';
import * as dotenv from 'dotenv';
import { TwitterAPI} from 'twitter-api-v2';


//INTERNAL MODULES:
import authOptions from './helpers/auth.twitter';

//APP INSTANCES:
const app = express();

//ENVIRONMENTS:
dotenv.config ();

//TWITTER CLIENT:
const twitterCLient = new TwitterAPI ( authOptions);

//ENDPOINTS:

//START SERVER:
app.listen (process.env.PORT, () => {
    console.log ( `SERVER RUNNING ON PORT: ${process.env.PORT}` );
});