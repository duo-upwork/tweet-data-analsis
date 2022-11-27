//DEPENDENCIES:
import express from 'express';
import * as dotenv from 'dotenv';
import { TwitterApi} from 'twitter-api-v2';


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
const twitterCLient = new TwitterApi ( authOptions);


//ENDPOINTS:
app.get ( '/', ( req, res) => {
    const twit = twitterCLient.v2
    //  ( 'JavaScript', {'media.fields': 'url'})
    // .then ( ( twits ) => {
    //     return twits.json ();
    // })
    // .then ( (data) => {
    //     console.log (data);
    //     res.json(data)
    // })
    res.json(twit);
})

//START SERVER:
app.listen (process.env.PORT, () => {
    console.log ( `SERVER RUNNING ON PORT: ${process.env.PORT}` );
});