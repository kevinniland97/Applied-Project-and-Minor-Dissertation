// import { firebaseConfig } from "../firebase/firebase";

// export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
// export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

// export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// export const VERIFY_REQUEST = "VERIFY_REQUEST";
// export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

// /**
//  * Sign up logic - three types of operations/outcomes from signing up:
//  * requestSignUp() - User attempts to sign up
//  * receiveSignUp() - User has signed up
//  * signUpError() - User sign up has failed
//  */ 
// const requestSignUp = () => {
//   return {
//     type: SIGNUP_REQUEST
//   };
// };

// const receiveSignUp = user => {
//   return {
//     type: SIGNUP_SUCCESS,
//     user
//   };
// };

// const signUpError = () => {
//   return {
//     type: SIGNUP_FAILURE
//   };
// };

// /**
//  * Login logic - three types of operations/outcomes from logging in:
//  * requestLogin() - User attempts to login
//  * receiveLogin() - User has logged in
//  * loginError() - User login has failed
//  */
// const requestLogin = () => {
//   return {
//     type: LOGIN_REQUEST
//   };
// };

// const receiveLogin = user => {
//   return {
//     type: LOGIN_SUCCESS,
//     user
//   };
// };

// const loginError = () => {
//   return {
//     type: LOGIN_FAILURE
//   };
// };

// /**
//  * Log out logic - three types of operations/outcomes from logging out:
//  * requestLogout() - User attempts to logout
//  * receiveLogout() - User has logged out
//  * logoutError() - User logout has failed
//  */
// const requestLogout = () => {
//   return {
//     type: LOGOUT_REQUEST
//   };
// };

// const receiveLogout = () => {
//   return {
//     type: LOGOUT_SUCCESS
//   };
// };

// const logoutError = () => {
//   return {
//     type: LOGOUT_FAILURE
//   };
// };

// /**
//  * Verify logic - two types of operations/outcomes from verification:
//  * verifyRequest() - The request to be verified 
//  * verifySuccess() - The request has been verified successfully
//  */
// const verifyRequest = () => {
//   return {
//     type: VERIFY_REQUEST
//   };
// };

// const verifySuccess = () => {
//   return {
//     type: VERIFY_SUCCESS
//   };
// };

// /**
//  * Attempts to log in a user with the provided email and password. Authentication is handled by Firebase
//  * 
//  * @param {*} email - User's email
//  * @param {*} password - User's password
//  */
// export const loginUser = (email, password) => dispatch => {
//   dispatch(requestLogin());

//   firebaseConfig
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(user => {
//       dispatch(receiveLogin(user));
//     })
//     .catch(error => {
//       dispatch(loginError());
//     });
// };

// /**
//  * Attempts to sign up a user with a username, first name, last name, email, and password
//  * 
//  * @param {*} username - User's username
//  * @param {*} firstName - User's first name
//  * @param {*} lastName - User's last name
//  * @param {*} email - User's email
//  * @param {*} password - User's password
//  */
// export const signUpUser = (username, firstName, lastName, email, password) => dispatch => {
//   dispatch(requestSignUp());

//   firebaseConfig
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(user => {
//       dispatch(receiveSignUp(user));
//     })
//     .catch(error => {
//       dispatch(signUpError());
//     });
// };

// /**
//  * Attempts to log out a user. 
//  */
// export const logoutUser = () => dispatch => {
//   dispatch(requestLogout());

//   firebaseConfig
//     .auth()
//     .signOut()
//     .then(() => {
//       dispatch(receiveLogout());
//     })
//     .catch(error => {
//       dispatch(logoutError());
//     });
// };

// /**
//  * Authentication verification
//  */
// export const verifyAuth = () => dispatch => {
//   dispatch(verifyRequest());
//   firebaseConfig.auth().onAuthStateChanged(user => {

//     // if the user object isn't null...
//     if (user !== null) {
//       dispatch(receiveLogin(user));
//     }

//     dispatch(verifySuccess());
//   });
// };