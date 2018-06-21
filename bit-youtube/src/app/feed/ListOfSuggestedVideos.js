import React from 'react';
import SuggestedVideo from './SuggestedVideo';

const ListOfSuggestedVideos = (props) => {

    return (
        <div className='listOfSuggVideos'>
            {props.videos.map(video => {
                return <SuggestedVideo id={video.id} />
            })}

        </div>
    )
}

export default ListOfSuggestedVideos;