import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail'

class Video extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('Introduction to AWS Elastic Disaster Recovery | Amazon Web Services');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search/', {
            params: {
                q: term
            }
        });

        //array of videos
        this.setState({
             videos: response.data.items,
             selectedVideo: response.data.items[0] 
            });
        console.log(this.state.videos);
    };

    render(){
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className = 'ui grid'>
                    <div className= 'ui one column stackable center aligned page grid'>
                        <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;