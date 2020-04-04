import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import firebase from 'firebase';
import firebaseConfig from '../firebase/firebase-config';
import FileUploader from 'react-firebase-file-uploader';
import SortsToolbar from './SortsToolbar.js';

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
            name: [], 
            size: [],
            uploaded: [],
            sort: '',
            pastSorts: [],
            videoURL: [],
            progress: 0
        };

        var storage = firebase.storage();
        var storageRef = storage.ref();
        var i = 0;

        storageRef.child('sorts/').listAll().then(function(result) {
            result.items.forEach(function(fileRef) {
                console.log('File reference: ' + fileRef.toString());
            });
        });
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
        
        return (
        <div className="App">
            <SortsToolbar history={this.props.history} />
            <FileUploader 
            accept="*"
            name="video"
            storageRef={firebase.storage().ref('sorts')} 
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
            />
            <div>
                <ul>{this.state.sort}</ul>
            </div>
        </div>
        );
    }
}

export default withStyles(styles)(Sorts);