import React, { createContext, useCallback, useState } from 'react';
import Api from '../services/Api';

export const GithubContext = createContext({
    loading: false,
    user: [],
    repositories: [],
    starred: []
});

const GithubUser = ({ children }) => {

    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    });    


    const getUser = (userName) => {
        setGithubState( (prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        Api.get(`users/${userName}`)
        .then( ({data}) => {
            setGithubState( (prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_gists
                },
            }));
        });   
    }
    
    const getUserRepos = (userName) => {
        Api.get(`users/${userName}/repos`)
        .then( ({ data }) =>  JSON.stringify(data))
        .then( (dataJson) => {
            setGithubState({
                ...prevState,
                repositories: dataJson
            });
        });        
    }

    const getUserStarred = (userName) => {
        Api.get(`users/${userName}/starred`)
        .then( ({ data }) => JSON.stringify(data))
        .then( (dataJson) => {
            setGithubState({
                ...prevState,
                starred: dataJson
            });
        });
    }

    const contextValue = {
        githubState,
        getUser: useCallback( (userName) => getUser(userName), []),
        getUserRepos: useCallback( (userName) => getUserRepos(userName), [] ),
        getUserStarred: useCallback( (userName) => getUserStarred(userName), [] )
    }

    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );

}