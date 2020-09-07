import { useEffect, useState } from 'react';

function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();
  console.log('auth',auth);
  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);
  const logOut = () => auth.signout();

  useEffect(() => {

    auth.onAuthStateChanged( user => {
      console.log(user);
      if(user) {
        setAuthentication(user);
      }
    });
  }, [authentication]);

  return { authentication, logIn };
}

export default useAuth;
