// import React, { Component } from "react";
// import { withStyles } from "@material-ui/styles";
// import { Button } from '@material-ui/core';
// import firebase from 'firebase';
// import $ from 'jquery';
// import firebaseConfig from '../firebase/firebase-config';
// import FileUploader from 'react-firebase-file-uploader';
// import SortsToolbar from '../components/SortsToolbar.js';

// const styles = () => ({
//     "@global": {
//         body: {
//             backgroundColor: "#fff"
//         }
//     },
//     paper: {
//         marginTop: 100,
//         display: "flex",
//         padding: 20,
//         flexDirection: "column",
//         alignItems: "center"
//     },
//     avatar: {
//         marginLeft: "auto",
//         marginRight: "auto",
//         backgroundColor: "#f50057"
//     },
//     form: {
//         marginTop: 1
//     },
//     errorText: {
//         color: "#f50057",
//         marginBottom: 5,
//         textAlign: "center"
//     }
// });

// firebase.initializeApp(firebaseConfig);

// class Sorts extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             progress: 0,
//             sort: '',
//             files: null
//         };
        
//         // this.base = 'https://jmperezperez.com/screenflow/lib/';
        
//         // iframe.src = this.base + 'embed.html';
//         // iframe.style.display = 'none';
//         // const iframe = document.createElement('iframe');
//         // this.iframe = iframe;
//     }

//     handleUploadStart = () => {
//         this.setState ({
//           progress: 0
//         })
//     }
    
//     handleUploadSuccess = filename => {
//         this.setState ({
//           sort: filename, 
//           progress: 100
//         })
    
//         firebase.storage().ref('sorts').child(filename).getDownloadURL()
//         .then(url => this.setState ({
//           videoURL: url
//         }))
//     }

//     // initialize() {
//     //     document.addEventListener('keyup', e => {
//     //       const iframe = this.iframe;

//     //       switch (e.keyCode) {
//     //         case 65 /* a */ : {
//     //           iframe.classList.toggle('hidden');
//     //           break;
//     //         }
//     //         case 83 /* s */ : {
//     //           iframe.classList.toggle('in-corner');
//     //           iframe.classList.toggle('in-fullscreen');
//     //           if (iframe.classList.contains('in-corner')) {
//     //             this.adjustAspectRatio();
//     //           }
//     //           break;
//     //         }
//     //         case 27 /* escape */ : {
//     //           this.sendMessage('stop-recording');
//     //           break;
//     //         }
//     //       }
//     //     });
    
//     //     window.addEventListener('resize', e => {
//     //       this.adjustAspectRatio();
//     //     });
    
//     //     document.body.appendChild(this.iframe);
    
//     //     // append css
//     //         const ss = document.createElement('link');
//     //     const ref = (document.body || document.getElementsByTagName('head')[0]);
//     //         var sheets = document.styleSheets;
//     //         ss.rel = 'stylesheet';
//     //         ss.href = this.base + 'main.css';
    
//     //     const onloadcssdefined = cb => {
//     //             const resolvedHref = ss.href;
//     //             let i = sheets.length;
//     //             while(i--) {
//     //                 if( sheets[i].href === resolvedHref ){
//     //                     return cb();
//     //                 }
//     //             }
//     //             setTimeout(() => {
//     //                 onloadcssdefined(cb);
//     //             }, 10);
//     //         };
    
//     //     const loadCB = () => {
//     //       this.iframe.style.display = '';
//     //       this.iframe.classList.add('screenflow', 'in-corner');
//     //       this.adjustAspectRatio();
//     //     }
//     //     ref.parentNode.insertBefore(ss, ref);
//     //     onloadcssdefined(loadCB);
//     //   }
    
//     //   adjustAspectRatio() {
//     //     const iframe = this.iframe;
//     //     if (iframe.classList.contains('in-corner')) {
//     //       const w = document.documentElement.clientWidth;
//     //       const h = document.documentElement.clientHeight;
//     //       const iW = Math.round(w / 4);
//     //       const iH = Math.round(iW / 1.6);
//     //       const percentageH = iH * 100 / h;
//     //       iframe.style.top = 100 - percentageH + '%';
//     //       iframe.style.height = percentageH + '%';
//     //     } else {
//     //       iframe.style.top = '';
//     //       iframe.style.height = '';
//     //     }
//     //   }
    
//     //   sendMessage(messageName, messageData) {
//     //     this.iframe.contentWindow.postMessage({
//     //       name: messageName,
//     //       data: messageData
//     //     }, '*');
//     //   }
    
//     render() {
//         const { classes } = this.props;
//         console.log(this.state);

//         var i = 0;
//         let displayFile = '';
//         const sorts = [];
//         $('#Sorts').find('tbody').html('');

//         firebase.storage().ref().child('sorts/').listAll().then(function(result) {
//             result.items.forEach(function(fileRef) {
//                 i++; // Counter for each file in storage

//                 fileRef.getDownloadURL().then(function(fileURL) {
//                     console.log(fileURL);

//                     displayFile += '<tr>';
//                     displayFile += '<td>';
//                     displayFile += i;
//                     displayFile += '</td>';
//                     displayFile += '<td>';
//                     displayFile += '<img src="' + fileURL + '" width="100px" style="float:right">';
//                     displayFile += '</td>';
//                     displayFile += '</tr>';

//                     $('#List').find('tbody').append(displayFile);
//                 })
//             });
//         });

//         return (
//         <div className="App">
//             <SortsToolbar history={this.props.history} />
//             <FileUploader 
//             accept="*"
//             name="video"
//             storageRef={firebase.storage().ref('sorts')} 
//             onUploadStart={this.handleUploadStart}
//             onUploadSuccess={this.handleUploadSuccess} />
//             <br />
//             <table id="Sorts">
//                 <tbody>
//                 </tbody>
//             </table>
//         </div>
//         );
//     }
// }

// // {
// //     const embedder = new Sorts();
// //     embedder.initialize();
// // }

// export default withStyles(styles)(Sorts);