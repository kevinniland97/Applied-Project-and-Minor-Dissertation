import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import { withStyles } from "@material-ui/styles";
import firebase from 'firebase';
import ReactPlayer from 'react-player';
import firebaseConfig from '../firebase/firebase-config';
import FileUploader from 'react-firebase-file-uploader';
import SortsToolbar from '../components/SortsToolbar.js';
import '../styling/Sorts.css';

const $ = window.$;

const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#fff"
        }
    },
    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    errorText: {
        color: "#f50057",
        marginBottom: 5,
        textAlign: "center"
    },
    rectangle: {
        width: '50px',
        height: '50px',
    }
});

firebase.initializeApp(firebaseConfig);

class Sorts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            sort: '',
            files: null,
            url: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    handleChange(event) {
        this.setState({url: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({url: event.target.value});
    }

    handleUploadStart = () => {
        // On upload start, progress of upload is set to 0
        this.setState ({
          progress: 0
        })
    }
    
    handleUploadSuccess = filename => {
        this.setState ({
          sort: filename, 
          progress: 100
        })
        
        // File will be uploaded to the sorts folder and download URL will be saved to state
        firebase.storage().ref('sorts').child(filename).getDownloadURL()
        .then(url => this.setState ({
          videoURL: url
        }))

        // Reload the page once the file has been uploaded to update the list of files
        window.location.reload();
    }

    render() {
        /**
         * Using React HTML Parser, display the HTML required to list all files in storage. React HTML Parser is a 
         * utility for converting HTML strings into React components. Avoids the use of dangerouslySetInnerHTML and 
         * converts standard HTML elements, attributes and in-line styles into their React equivalents
         * 
         * This is was the only way I found that could list all files from storage - seems very difficult to do in React itself
         */
        const html = '<style>table.List { table-layout: fixed; } #List { font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; border-collapse: collapse; width: 100%; } #List td, #customers th { border: 1px solid #56935c; padding: 8px; } #List tr:nth-child(even){background-color: #f2f2f2;} #List tr:hover {background-color: #ddd;} #List th { padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #56935c; color: white; }</style><body><table id="List"><tbody><tr><th>File Name</th><th>File Link</th></tr></tbody></table></body>';
        // const rectangle = '<style>.square { height: 300px; width: 300px; background-color: #555; } </style><body><div class="square"></div> </body>';
        
        $('#List').find('tbody').html('');

        /**
         * Get all files from storage and list them
         */
        firebase.storage().ref().child('sorts/').listAll().then(function(res) {
            res.items.forEach(function(ref) {
                ref.getMetadata().then(function(url) {
                    ref.getDownloadURL().then(function(file) {
                        let new_html = '';
    
                        new_html += '<tr>';
                        new_html += '<td>';
                        new_html += url.name;
                        new_html += '</td>';
                        new_html += '<td>';
                        new_html += file;
                        new_html += '</td>';
                        new_html += '</tr>';
        
                        $('#List').find('tbody').append(new_html);
                    });
                });
            });
        });

        return (
        <body className="App">
            <SortsToolbar history={this.props.history} />
            
            <div className="file-uploader">
                <FileUploader 
                accept="*"
                name="video"
                storageRef={firebase.storage().ref('sorts')} 
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess} />
            </div>

            <div className="player">
                <ReactPlayer 
                className='react-player'
                url={this.state.url}
                volume='0'
                controls='true'
                playing='true'
                preload='true'
                light='true'
                width='80%'
                height='80%'
                config={{
                    file: { 
                    attributes: { 
                        poster: 'react_blog_mobile.jpg' 
                    } 
                    } 
                }}
                />
            </div>

            <div className="rectangle">
                
            </div>

            <div className="sort-list">
                {ReactHtmlParser(html)}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        URL: <input type="text" value={this.state.url} onChange={this.handleChange} />
                    </label>

                    {/* <input type="submit" value="Play" /> */}
                </form>
            </div>

            <div class="clearfix"></div>
        </body>
        );
    }
}

export default withStyles(styles)(Sorts);