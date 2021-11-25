import React from "react";
import App from "./App";
import GithubProvider from "./providers/GithubProvider";
import { ResetCSS } from './global/ResetCSS';

const Providers = () => {
    return(
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    );
}

export default Providers;