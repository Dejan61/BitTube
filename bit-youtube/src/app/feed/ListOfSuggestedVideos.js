import React from 'react';
import SuggestedVideo from './SuggestedVideo';

const ListOfSuggestedVideos = (props) => {

    return (
        <div className='listOfSuggVideos'>
            {props.videos.map(video => {
                return <SuggestedVideo id={video.id} image={video.image} title={video.title} collectId={props.collectId} />
            })}

        </div>
    )
}

export default ListOfSuggestedVideos;