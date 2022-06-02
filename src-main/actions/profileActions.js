import firebase from 'firebase';
export const PROFILE_CHANGED = 'profile_changed';
export const UPDATE_PROFILE = 'update_profile';
export const ChangeProfile = profile => {
  return {
    type: PROFILE_CHANGED,
    payload: profile,
  };
};

export const updateProfile = profile => {
  const currentUser = firebase.auth().currentUser;

  const email = currentUser.email;

  return dispatch => {
    firebase
      .database()
      .ref('/profile')
      .push({email, profile})
      .then(() => {
        dispatch({
          type: UPDATE_PROFILE,
        });
      });
  };
};
