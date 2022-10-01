import { IPublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import { loginRequest } from "../config/authconfig";


function loginRedirect(instance : IPublicClientApplication) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e)
    })
}

export default function SigninButton() {
    const { instance } = useMsal();

    return (
        <Button variant="contained" onClick={() => loginRedirect(instance)}>Sign in using Popup</Button>
    )
    
}