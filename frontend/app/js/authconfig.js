import {LogLevel} from "@azure/msal-browser"

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_clockorock_signup",
        forgotPassword: "B2C_1_clockorock_password_reset",
        editProfile: "B2C_1_clockorock_profile_edit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://bunnylane.b2clogin.com/bunnylane.onmicrosoft.com/B2C_1_clockorock_signup",
        },
        forgotPassword: {
            authority: "https://bunnylane.b2clogin.com/bunnylane.onmicrosoft.com/B2C_1_clockorock_password_reset",
        },
        editProfile: {
            authority: "https://bunnylane.b2clogin.com/bunnylane.onmicrosoft.com/B2C_1_clockorock_profile_edit"
        }
    },
    authorityDomain: "bunnylane.b2clogin.com"
}

export const msalConfig = {
    auth: {
        clientId: "ede66fd5-d2a8-4104-90b4-f5d0de60a84c", // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: "/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
 export const protectedResources = {
    apiHello: {
        endpoint: "http://localhost:5000/hello",
        scopes: ["https://bunnylane.onmicrosoft.com/ede66fd5-d2a8-4104-90b4-f5d0de60a84c/user.read"], // e.g. api://xxxxxx/access_as_user
    },
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
 export const loginRequest = {
    scopes: [...protectedResources.apiHello.scopes]
};