import React from 'react';

const VideoPlayer = (props) => {

    return (
        <div>
            <iframe width="100%" height='300px' src={props.videoUrl} frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoPlayer;