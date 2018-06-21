import React from 'react';
import PreviousVideo from './PreviousVideo';

const ListOfPreviousVideos = (props) => {

    return (
        <div>
            {/* {props.videos.map(video => {
                return <PreviousVideo key={video.id} id={video.id} image={video.image} title={video.title} collectId={props.collectId} />
            })} */}
            <PreviousVideo />
            <PreviousVideo />
            <PreviousVideo />
            <PreviousVideo />

        </div>
    )
}

export default ListOfPreviousVideos;