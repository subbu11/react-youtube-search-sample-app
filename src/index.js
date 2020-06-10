import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search' 
import lodash from 'lodash'
//import gapi from 'gapi'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'

const YT_SEARCH_API_KEY = "<your_api_key>"

// Ref for GApi:
// https://www.codexpedia.com/api/youtube-search-api-example-with-javascript-and-html/
// https://github.com/google/google-api-javascript-client/blob/master/docs/start.md

// Create components
class App extends Component {   
    constructor (props) {
        console.log("creating") 
        super(props)

        this.state = { videos : [] }
        this.search('surfboards')
        /* Unable to install gapi        
        gapi.client.load('youtube', 'v3', function() {
            console.log("google API loaded")
            gapi.client.init({'apiKey': YT_SEARCH_API_KEY
        }).then(function() {
            return gapi.client.youtube.search.list({
                part: 'snippet',
                q: "dogs"
            });
          }).then(function(response) {
            console.log(response.result);
          }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
          });

            //gapi.client.setApiKey(YT_SEARCH_API_KEY);
        })
        */
    }

    search(term) {
        YTSearch({key: YT_SEARCH_API_KEY, term: term}, (result) => {
            console.log(result)
            this.setState(
                { videos : result, 
                    selectedVideo : result[0] 
                })
        })
    }

    render() {
        const searchThrottled = lodash.debounce((term) => this.search(term), 300)

        return (
        <div>
            <SearchBar onTermChange={ searchThrottled }/>
            <VideoDetails currentVideo= { this.state.selectedVideo } />
            <VideoList videos={ this.state.videos} onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }/>
        </div>
        )
    }
}

// render components on HTML DOM
ReactDOM.render(<App />, document.querySelector(".container"))