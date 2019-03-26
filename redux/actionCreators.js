import {login} from '../API/api'


/*USER*/
// export const loginUser = (username,password) => async dispatch=>{
//   try{
//     const token = await login(username,password)
//     dispatch({type:'LOGIN_FUFLIED', payload:token})
//   }catch(errorMessage){
//     dispatch({type:'LOGIN_REJECTED', payload:errorMessage})
//   }
// }

export const loginUser = (username,password) => async dispatch => {
    setTimeout(()=>{
      if( username == "admin" , password == "admin" ){
        dispatch({type:'LOGIN_FUFLIED', payload:"token"})
      }else{
        dispatch({type:'LOGIN_REJECTED', payload:" Nom d'utilisateur ou mot de passe incorrect"})
      }
    },1000)
}

export const resetUser = () => {
  dispatch({type:'RESET_USER', payload:"token"})
}

/*FireBaseData */
export const upadateUserUID= (userUID) =>{
  console.log('about to update upadateUserUID')
  return {
    type:'UPDATE_USER_UID',
    payload: userUID
  };
}

export const updatePhoneNumber =(phoneNumber)=>{
  return{
    type: 'UPDATE_PHONE_NUMBER',
    payload: phoneNumber
  }
}


/*ui*/
export const updateWalkthrough =(isDone)=>{
  return{
    type: 'UPDATE_WALKTHROUGH',
    payload: isDone
  }
}
export const updateWizardBeenShown= (isShown)=>{
  return{
    type:'UPDATE_WIZARD_IS_SHOWN',
    payload: isShown
  }
}
export const updateDiagVisibility=(isVisible)=>{
  return {type:'UPDATE_DIAG_VISIBILITY', payload: isVisible}
}

