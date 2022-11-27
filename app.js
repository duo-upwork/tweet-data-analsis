//DEPENDENCIES:
import express from 'express';
import * as dotenv from 'dotenv';
import { TwitterAPI} from 'twitter-api-v2';

//APP INSTANCES:
const app = express();

//ENVIRONMENTS:
dotenv.config ();


//ENDPOINTS:

//START SERVER:
app.listen (process.env.PORT, () => {
    console.log ( `SERVER RUNNING ON PORT: ${process.env.PORT}` );
});