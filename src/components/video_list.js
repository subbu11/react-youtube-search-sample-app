import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    console.log(props.videos.length)
    const videoListItems = props.videos.map(function(video) {
        return <VideoListItem 
        key={video.etag} 
        video={video}
        onVideoSelect={props.onVideoSelect}
        />
    })
    return (
        <ul className="col-md-6 list-group list-unstyled">
            { videoListItems }
        </ul>
    )
}

export default VideoList