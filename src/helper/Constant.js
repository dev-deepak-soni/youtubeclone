
const API_KEY = process.env.REACT_APP_SECRET_YOUTUBE_API_KEY;

const videoDetailsURL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id=";

export const channelDetailsURL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id="; 

export default videoDetailsURL;