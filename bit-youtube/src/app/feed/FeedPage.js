import React from 'react';
import videoServices from '../../services/videoServices';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
import Loading from '../../partials/loading/Loading';
import ListOfSuggestedVideos from './ListOfSuggestedVideos';
import ListOfPreviousVideos from './ListOfPreviousVideos';


class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videoId: '',
            videoUrl: "",
            searchInput: "",
            loading: true,
            suggestedVideos: []
        }
        this.collectValue = this.collectValue.bind(this);
        this.collectId = this.collectId.bind(this);

    }


    collectValue(searchInput) {
        this.loadVideo(searchInput);
    }

    loadVideo(keyword) {

        this.setState({
            loading: true
        }, () => {
            videoServices.getVideo(keyword)
                .then(video => {
                    this.setState({
                        videoId: video.id,
                        videoUrl: 'https://www.youtube.com/embed/' + video.id,
                        loading: false
                    })
                    this.loadSuggestedVideos(video.id);
                    let local = localStorage.getItem('videos');

                    if (!local) {
                        let previousVideos = [];
                        previousVideos.push(video);
                        localStorage.setItem('videos', JSON.stringify(previousVideos));
                    } else {
                        if (!local.includes(JSON.stringify(video))) {
                            local = JSON.parse(local);
                            if (local.length > 8) {
                                local.length = 8
                            }
                            local.splice(0, 0, video);
                            localStorage.setItem('videos', JSON.stringify(local));
                        }
                    }
                }
                );
        })
    }

    loadSuggestedVideos(videoId) {
        videoServices.getSuggestedVideos(videoId)
            .then(videos => {
                this.setState({
                    suggestedVideos: videos
                })
            })
    }

    collectId(id) {
        this.loadVideo(id)
    }

    componentDidMount() {
        this.loadVideo(this.state.searchInput);
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <SearchBar collectValue={this.collectValue} />
                </div>
                <div className='row'>
                    <div className='col-6 offset-1 videoPlayer'>
                        <div className='col-12'>
                            {(this.state.loading) ? <Loading /> : <VideoPlayer videoUrl={this.state.videoUrl} />}
                        </div>
                        <div className='col-10 offset-1 listOfPrevVideos'>
                            <p>Previous played videos</p>
                            <ListOfPreviousVideos videos={this.state.previousVideos} collectId={this.collectId} />
                        </div>
                    </div>
                    <div className='col-4 offset-1 listOfSuggVideos'>
                        <p>Reccomended Videos</p>
                        <ListOfSuggestedVideos videos={this.state.suggestedVideos} collectId={this.collectId} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedPage;