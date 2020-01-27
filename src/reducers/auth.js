import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS
} from "../actions/";

/**
 * Contains all possible states
 */
export default (
  state = {
    isSigningUp: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    signUpError: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
  },
  action
) => {
  switch (action.type) {
    /**
     * case SIGNUP_REQUEST
     * 
     * ...state - 
     * isSigningUp - If the action type is this case, set isSigningUp to true
     * signUpError - When a signup request has been made, set signUpError to false as it has been determined yet whether or not
     * the signup request has failed or not
     */
    case SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signUpError: false
      };

    /**
      * case SIGNUP_SUCCESS
      * 
      * ...state - 
      * isSigningUp - If the action type is this case, set isSigningUp to false as the user has already signed up
      * isAuthenticated - In this case, set isAuthenticated to true as the signup was successful
      * user - 
      */
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        user: action.user
      };

    /**
      * case SIGNUP_FAILURE
      * 
      * ...state - 
      * isSigningUp - If the action type is this case, set isSigningUp to false as the user has attempted to sign up at this point
      * isAuthenticated - In this case, set isAuthenticated to false as the signup was unsuccessful
      * signUpError - Set to true
      */
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: false,
        signUpError: true
      };

    /**
      * case LOGIN_REQUEST
      * 
      * ...state - 
      * isLoggingIn - If the action type is this case, set isLoggingIn to true
      * loginError - When a login request has been made, set loginError to false as it hasn't been determined yet whether or not
      * the login request has failed or not
      */
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      };

    /**
      * case LOGIN_SUCCESS
      * 
      * ...state - 
      * isLoggingIn - If the action type is this case, set isLoggingIn to false as the user has already logged in
      * isAuthenticated - In this case, set isAuthenticated to true as the login was successful
      * user - 
      */
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
      };

    /**
      * case LOGIN_FAILURE
      * 
      * ...state - 
      * isLoggingIn - If the action type is this case, set isLoggingIn to false as the user has attempted to log in at this point
      * isAuthenticated - In this case, set isAuthenticated to false as the login was unsuccessful
      * loginError - Set to true
      */
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      };

    /**
      * case LOGOUT_REQUEST
      * 
      * ...state - 
      * isLoggingOut - If the action type is this case, set isLoggingOut to true
      * logoutError - When a logout request has been made, set logoutError to false as it hasn't been determined yet whether or not
      * the logout request has failed or not
      */
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    
    /**
      * case LOGOUT_SUCCESS
      * 
      * ...state - 
      * isLoggingOut - If the action type is this case, set isLoggingOut to false as the user has already logged out
      * isAuthenticated - In this case, set isAuthenticated to false as the login was successful, therefore the user is no 
      * longer authenticated
      * user - Set the user object to null/empty
      */
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      };

    /**
      * case LOGOUT_FAILURE
      * 
      * ...state - 
      * isLoggingOut - If the action type is this case, set isLoggingOut to false as the user has attempted to log out at this point
      * logoutError - Set to true
      */
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };

    /**
      * case VERIFY_REQUEST
      * 
      * ...state - 
      * isVerifying - If the action type is this case, set isVerifying to true as as a request has been made that needs to be verified
      * verifyingError - Set to false as it hasn't been determined yet whether the the request has thrown an error or not
      */
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };

    /**
      * case VERIFY_SUCCESS
      * 
      * ...state - 
      * isVerifying - If the action type is this case, set isVerifying to false as as a request has been made has been verified
      * verifyingError - Set to false as since the request has been successfully verified
      */
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
        verifyingError: false
      };

    default:
      return state;
  }
};