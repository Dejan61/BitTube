import React from 'react';
import videoServices from '../../services/videoServices';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
import Loading from '../../partials/loading/Loading';


class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videoUrl: "",
            searchInput: "",
            loading: true
        }
        this.collectValue = this.collectValue.bind(this);
    }

    collectValue(searchInput) {
        this.setState({
            searchInput
        })

        this.loadVideo(searchInput);
    }

    loadVideo(keyword) {
        this.setState({
            loading: true
        }, () => {
            videoServices.getVideo(keyword)
                .then(videoId =>
                    this.setState({
                        videoUrl: 'https://www.youtube.com/embed/' + videoId,
                        loading: false
                    })

                );
        })

    }

    componentDidMount() {
        this.loadVideo(this.state.searchInput)
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <SearchBar collectValue={this.collectValue} />
                </div>
                <div className='row'>
                    <div className='col-6 offset-3 videoPlayer'>
                        {(this.state.loading) ? <Loading /> : <VideoPlayer videoUrl={this.state.videoUrl} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedPage;