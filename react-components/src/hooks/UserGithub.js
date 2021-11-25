import { useContext } from "react";
import { GithubContext } from '../providers/GithubProvider';

const UserGithub = () =>  {
    const { 
        githubState,
        getUser,
        getUserRepos,
        getUserStarred 
    } = useContext( GithubContext );

    return { githubState, getUser, getUserRepos, getUserStarred };
}

export default UserGithub;