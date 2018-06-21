import { key } from '../shared/constants.js';
import axios from 'axios';


class VideoServices {

    getVideo(searchInput) {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                key: key,
                q: searchInput,
                maxResults: 1
            }
        }).then(response => response.data)
            .then(data => data.items[0].id.videoId)
    }
}

export default new VideoServices();