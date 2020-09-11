import { useEffect, useState } from 'react';

function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();
  // console.log('auth', auth);
  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);
  const logOut = () => auth.signOut()
    .then()
    .catch(err => console.error(err));

  useEffect(() => {

    auth.onAuthStateChanged( user => {
      // console.log(user);
      // if(user) {
      setAuthentication(user);
      // }
    });
  }, [auth,authentication]);

  return { authentication, logIn, logOut };
}

export default useAuth;
