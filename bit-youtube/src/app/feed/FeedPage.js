import React from 'react';
import videoServices from '../../services/videoServices';
import VideoPlayer from './VideoPlayer';


class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videoUrl: ""
        }
    }

    loadVideo() {
        videoServices.getVideo('living on the prayer')
            .then(videoId =>
                this.setState({
                    videoUrl: 'https://www.youtube.com/embed/' + videoId
                })

            );
    }
    componentDidMount() {
        this.loadVideo()
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-3 videoPlayer'>
                        <VideoPlayer videoUrl={this.state.videoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedPage;