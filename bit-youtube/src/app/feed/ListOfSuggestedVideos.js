import React from 'react';
import SuggestedVideo from './SuggestedVideo';

const ListOfSuggestedVideos = (props) => {

    return (
        <div>
            {props.videos.map(video => {
                return <SuggestedVideo key={video.id} id={video.id} image={video.image} title={video.title} collectId={props.collectId} />
            })}

        </div>
    )
}

export default ListOfSuggestedVideos;