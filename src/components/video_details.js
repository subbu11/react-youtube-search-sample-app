import React from 'react'

const VideoDetails = (props) => {
    console.log("Rendering VideoDetails", props)
    if (!props.currentVideo){
        return <div> Loading ... </div>
    }
    const videoId = props.currentVideo.id.videoId 
    const videoUrl = `https://www.youtube.com/embed/${videoId}`
    console.log(videoUrl)

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" frameBorder="black"> {videoUrl} </iframe>
            </div>
            <div>
                {props.currentVideo.snippet.title}
            </div>
        </div>
    )
}

export default VideoDetails