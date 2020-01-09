import React, { Component } from 'react';
import './App.css';

import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import firebaseConfig from '../config';

firebase.initialiseApp(firebaseConfig);

class App extends Component {
    state = {
        image: '',
        imageURL: '',
        imageProgress: 0
    }

    handleUploadStart = () => {
        this.setState({
            imageProgress: 0
        })
    }

    handleUploadSuccess = fileName => {
        this.setState({
            image: fileName,
            imageProgress: 100
        })

        firebase.storage().ref('avatars').child(fileName).getDownloadURL()
        .then(url => this.setState({
            imageURL: url
        }))
    }

    render() {
        console.log(this.state)
        
        return (
            <div>
                <FileUploader 
                accept="image/*"
                name="image"
                storageRef={firebase.storage().ref('avatars')}
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess}
                />
            </div>
        );
    }
}

export default App;