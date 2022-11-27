import * as dotenv from 'dotenv';
//ENVIRONMENTS:
dotenv.config ();

const authOptions = {
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_KEY_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET
};

export default authOptions;