import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/use-auth';
import Admin from '../../pages/admin/admin.component';

export function PrivateRoute({ children, ...rest }) {
  const [adminUser, setAdminUser] = useState(false)
  let auth = useAuth();
  const history = useHistory();

  const admin = {
    createdAt: {seconds: 1604151096, nanoseconds: 223000000},
    displayName: "Ruben Aaronovitch-Bruce",
    email: "rabruben1@gmail.com",
    id: "NticDxKJyHO2sxJjN0dwJMUg0aT2"
  }
  console.log(auth.currentUser)
  useEffect(() => {
    if (auth.currentUser) {
      if (auth.currentUser.id === admin.id)  {
        setAdminUser(true);
        history.push('/admin');
       } else {
        setAdminUser(false)
       }
    } else {
      setAdminUser(false)
    }
  }, [auth.currentUser, admin.id, history])
  console.log(adminUser)
  console.log(admin)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        adminUser ? (
          <Admin currentUser={auth.currentUser} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export const SignInUpRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route 
      {...rest}
      render={({ location }) => 
      auth.currentUser ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from : location }
          }}
         /> 
      ) : (
        children
      )}
    />
  )
}