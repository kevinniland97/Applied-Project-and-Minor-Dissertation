import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import firebase from 'firebase';
// import ReactPlayer from 'react-player';
import firebaseConfig from '../firebase/firebase-config';
import FileUploader from 'react-firebase-file-uploader';
import SortsToolbar from '../components/SortsToolbar.js';

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
            files: null
        };
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

        var i = 0;
        let displayFile = '';
        const sorts = [];
        let arr = [];

        firebase.storage().ref().child('sorts/').listAll().then(function(result) {
            result.items.forEach(function(fileRef) {
                i++; // Counter for each file in storage

                fileRef.getDownloadURL().then(function(fileURL) {
                    sorts.push(fileURL.toString());
                })
            });
        });

        console.log(sorts);

        const listSorts = sorts.map((sort) =>
            <li>{sort}</li>
        );

        console.log(listSorts);

        return (
        <div className="App">
            <SortsToolbar history={this.props.history} />
            <FileUploader 
            accept="*"
            name="video"
            storageRef={firebase.storage().ref('sorts')} 
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess} />
            <br/>

            <ul>{sorts}</ul>
        </div>
        );
    }
}

export default withStyles(styles)(Sorts);