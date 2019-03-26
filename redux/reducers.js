

// ## Credential Reducers
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_REJECTED':
      return { ...state, loginError: action.payload };
    case 'LOGIN_FUFLIED':
      return { ...state,loginError: "" ,token: action.payload };
    case 'RESET_USER':
      return { };
    default:
      return state;
  }
}

export const fireBaseDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_UID':
      console.log('inside the reducer now: ' + action.payload)
      return { ...state, userUID: action.payload }
    case 'UPDATE_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload }
    default:
      return state;

  }
}


// ## UI Reducers
export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WALKTHROUGH':
      return { ...state, walkthroughDone: action.payload }
    case 'UPDATE_WIZARD_IS_SHOWN':
      return { ...state, shownWizard: action.payload };
    case 'UPDATE_DIAG_VISIBILITY':
      return { ...state, isDialogVisible: action.payload };
    default:
      return state;

  }
}

