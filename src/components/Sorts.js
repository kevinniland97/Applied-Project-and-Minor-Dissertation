import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { withStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
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
        this.setState ({
          progress: 0
        })
    }
    
    handleUploadSuccess = filename => {
        this.setState ({
          sort: filename, 
          progress: 100
        })
    
        firebase.storage().ref('sorts').child(filename).getDownloadURL()
        .then(url => this.setState ({
          videoURL: url
        }))
    }

    render() {
        const { classes } = this.props;
        console.log(this.state);

        /**
         * Using React HTML Parser, display the HTML required to list all files in storage. React HTML Parser is a 
         * utility for converting HTML strings into React components. Avoids the use of dangerouslySetInnerHTML and 
         * converts standard HTML elements, attributes and in-line styles into their React equivalents
         * 
         * This is was the only way I found that could list all files from storage - seems very difficult to do in React itself
         */
        const html = '<style>body { background-color: rgb(45, 87, 69);} </style><body><table id="List"><tbody></tbody></table></body>';

        $('#List').find('tbody').html('');

        /**
         * Get all files from storage and list them
         */
        firebase.storage().ref().child('sorts/').listAll().then(function(res) {
            res.items.forEach(function(ref) {
                ref.getDownloadURL().then(function(url) {
                // ref.getMetadata().then(function(url) {
                    let new_html = '';
    
                    new_html += '<tr>';
                    new_html += '<td>';
                    new_html += '<li>';
                    new_html += '</td>';
                    new_html += '<td>';
                    new_html += url;
                    new_html += '</td>';
                    new_html += '</tr>';
    
                    $('#List').find('tbody').append(new_html);
                });
            });
        });

        return (
        <body className="App">
            <SortsToolbar history={this.props.history} />
            
            <FileUploader 
                className="btn btn-primary"
                accept="*"
                name="video"
                storageRef={firebase.storage().ref('sorts')} 
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess} />
                <br/>

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