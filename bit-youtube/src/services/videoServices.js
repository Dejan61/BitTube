import { key, url } from '../shared/constants.js';
import axios from 'axios';
import Video from '../entities/Video';



class VideoServices {

    getVideo(searchInput) {
        return axios.get(url, {
            params: {
                part: 'snippet',
                key: key,
                q: searchInput,
                maxResults: 1
            }
        }).then(response => response.data)
            .then(data => data.items[0])
            .then(video => {
                if (!video) {
                    return null
                }
                return new Video(video.id.videoId, video.snippet.thumbnails.medium.url, video.snippet.title);
            })
    }

    getSuggestedVideos(id) {
        return axios.get(url, {
            params: {
                part: 'snippet',
                relatedToVideoId: id,
                type: 'video',
                key: key,
                maxResults: 8
            }
        }).then(response => response.data)
            .then(data => {
                const videos = data.items;
                return videos.map(video => {
                    return new Video(video.id.videoId, video.snippet.thumbnails.medium.url, video.snippet.title);
                })
            }
            )
    }
}

export default new VideoServices();