import React from  'react'

class VideoListItemOld extends React.Component {
    constructor(video) {
        super(video)
    }
    render(video) {
        return ( 
        <li className="media"> 
            <img src={ video.snippet.thumbnail.default} />
            <div className="media-body">

            </div>
        </li> )
    }
}

const VideoListItem =  function(videoInfo) {
        console.log(videoInfo)
        const video = videoInfo.video
        const cbOnVideoSelect = videoInfo.onVideoSelect
        return ( 
        <li className="media" onClick={() => cbOnVideoSelect(videoInfo.video)}> 
            <img src={ video.snippet.thumbnails.default.url} className="mr-3 video-item" alt="Generic placeholder image" />
            <div className="media-body">
                <h6>{ video.snippet.title } </h6>
            </div>
        </li> )
}

export default VideoListItem