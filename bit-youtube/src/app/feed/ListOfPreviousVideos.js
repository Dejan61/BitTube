import React from 'react';
import PreviousVideo from './PreviousVideo';



const ListOfPreviousVideos = (props) => {

    const videos = JSON.parse(localStorage.getItem('videos'));

    return (
        <div>
            {(videos) ? videos.slice(1, videos.length).map(video => {
                return <PreviousVideo key={video.id} id={video.id} image={video.image} title={video.title} collectId={props.collectId} />
            }) : ""}

        </div>
    )
}

export default ListOfPreviousVideos;