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
    twitterCLient.v2.singleTweet( '1596767162638938112')
    .then ( ( twits ) => {
         console.log (twits)
         res.json ( twits );
     })
    .catch ( ( e ) => {
        res.json({
            error_msg: e,
        });
    })
    //res.json(twit);
})

//START SERVER:
app.listen (process.env.PORT, () => {
    console.log ( `SERVER RUNNING ON PORT: ${process.env.PORT}` );
});