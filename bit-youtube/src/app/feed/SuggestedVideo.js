import React from 'react';

const SuggestedVideo = (props) => {
    return (
        <div className="suggestedVideo">
            <iframe width="100%" height='150px' src={'https://www.youtube.com/embed/' + props.id} frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}

export default SuggestedVideo;