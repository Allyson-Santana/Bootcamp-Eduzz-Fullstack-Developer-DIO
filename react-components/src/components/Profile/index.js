import * as Styled from './style';
import React from 'react';
import userGithub from '../../hooks/GetUserGithub';

export const Profile = () => {

    const { githubState } = userGithub();

    return(
        <Styled.MainProfile>
            components Profile
        </Styled.MainProfile>
    );

}