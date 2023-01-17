import React, { useEffect } from 'react';
import './App.css';
import Login from './Login'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser) //get user from slice by using useSelector hook
  const dispatch = useDispatch();

  //Keeps us logged when we refresh or change the page after logged in.
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl
        })
       ) 
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {/* If the user is null, render login page. */}
      {!user ? (
        <Login /> 
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
      )}
    </div>
  );
}

export default App;
