import { AppBar, Button } from "@mui/material";
import SigninButton from "./Signin";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { b2cPolicies, loginRequest } from "../config/authconfig";


export default function NavBar() {
    const { instance } = useMsal();

    const handleLogin = async () => {
        await instance.loginRedirect(loginRequest)
            .catch((error) => console.log(error))
    }

    return (
        <>
            <AuthenticatedTemplate>
                <Button href="/hello">Hello API</Button>
                <div className="ml-auto">
                    <Button variant="text" onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)} className="ml-auto">Edit Profile</Button>
                    <Button variant="text" onClick={() => instance.logoutPopup({ postLogoutRedirectUri: "/", mainWindowRedirectUri: "/" })}>Sign out using Popup</Button>
                    <Button variant="text" onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })}>Sign out using Redirect</Button>
                </div>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Button variant="text" onClick={handleLogin}>Sign in using Redirect</Button>
            </UnauthenticatedTemplate>
        </>
    );
}