import axios from 'axios';

const KEY = 'AIzaSyD-nnWwx8KIaH3kvpCMWNNHMrYkmz0tM1w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});