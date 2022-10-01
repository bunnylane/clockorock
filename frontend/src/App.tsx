import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings';
import About from './pages/About';
import NavBar from './components/AppBar';
import { useEffect } from 'react';
import { AuthenticatedTemplate, MsalProvider, useMsal } from '@azure/msal-react';
import { EventType, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { b2cPolicies, msalConfig } from './config/authconfig';
import Hello from './pages/Hello';

const Pages = () => {

  /**
   * useMsal is hook that returns the PublicClientApplication instance, 
   * an array of all accounts currently signed in and an inProgress value 
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { instance } = useMsal();

  /**
   * Using the event API, you can register an event callback that will do something when an event is emitted. 
   * When registering an event callback in a react component you will need to make sure you do 2 things.
   * 1) The callback is registered only once
   * 2) The callback is unregistered before the component unmounts.
   * For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/events.md
   */
  useEffect(() => {
    const callbackId = instance.addEventCallback((event: { eventType: EventType; error: { errorMessage: string | string[]; }; interactionType: InteractionType; payload: { idTokenClaims: { [x: string]: string; }; }; }) => {
      if (event.eventType === EventType.LOGIN_FAILURE) {
        if (event.error && event.error.errorMessage.indexOf("AADB2C90118") > -1) {
          if (event.interactionType === InteractionType.Redirect) {
            instance.loginRedirect(b2cPolicies.authorities.forgotPassword);
          } else if (event.interactionType === InteractionType.Popup) {
            instance.loginPopup(b2cPolicies.authorities.forgotPassword)
              .catch(e => {
                return;
              });
          }
        }
      }

      if (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
        if (event?.payload) {
          /**
           * We need to reject id tokens that were not issued with the default sign-in policy.
           * "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr").
           * To learn more about B2C tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
           */
          if (event.payload.idTokenClaims["acr"] === b2cPolicies.names.forgotPassword) {
            window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");
            return instance.logout();
          } else if (event.payload.idTokenClaims["acr"] === b2cPolicies.names.editProfile) {
            window.alert("Profile has been edited successfully. \nPlease sign-in again.");
            return instance.logout();
          }
        }
      }
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  }, []);

  return (
    <Routes>
      <Route path="/hello" element={<Hello/>}/>
    </Routes>
  )
}

export const PageLayout = (props : any) => /**
   * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
   * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
   * only render their children if a user is authenticated or unauthenticated, respectively.
   */ (
  <>
    <NavBar />
    <br />
    <h5>Welcome to the Microsoft Authentication Library For React Tutorial</h5>
    <br />
    {props.children}
    <br />
    <AuthenticatedTemplate>
      <footer>
        <h2>Authentication</h2>
      </footer>
    </AuthenticatedTemplate>
  </>
);


export const App = () => {
  return (
    <BrowserRouter>
      <MsalProvider instance={new PublicClientApplication(msalConfig)} />
      <PageLayout>
        <Pages />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
