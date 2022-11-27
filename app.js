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
    twitterCLient.v2.usersByUsernames( 'realdogen')
    .then ( ( twits ) => {
        //res.json ( twits.data[0].id)
        twitterCLient.v2.userTimeline (twits.data[0].id)
        .then ( (timeline) => {
            let twitterPosts = [];
            for (let tweet of timeline.data.data) {
                twitterPosts = [...twitterPosts, tweet.text];
             }
            console.log (timeline.data)
            res.json ( twitterPosts );
        })
        .catch ( ( e ) => {
            res.json ( e );
        });
     })
    .catch ( ( e ) => {
        res.json({
            error_msg: e.message,
        });
    })
    //res.json(twit);
})

//START SERVER:
app.listen (process.env.PORT, () => {
    console.log ( `SERVER RUNNING ON PORT: ${process.env.PORT}` );
});