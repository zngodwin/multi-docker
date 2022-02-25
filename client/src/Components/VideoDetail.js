import React from 'react';
import './VideoItem.css';

const VideoDetail = ({video}) => {
    if (!video){
        return <div>Loading...</div>
    };

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    //const videoSrc = `https://www.youtube.com/embed/mIk9F7tUc-8`
    return(
        <div>
            <div className='ui embed'>
                <iframe id="iframe_main" title='video player'src={videoSrc} />
            </div>
            <div className ='ui segment'> 
                <h4>Products and Services  </h4>
            </div>
        </div>
    );
};

export default VideoDetail;