import { useContext } from "react";
import { GithubContext } from '../providers/GithubUser';

export const GetUserGithub = () => {
    const { 
        githubState,
        getUser,
        getUserRepos,
        getUserStarred 
    } = useContext( GithubContext );

    return ( githubState, getUser,getUserRepos,getUserStarred  );
}