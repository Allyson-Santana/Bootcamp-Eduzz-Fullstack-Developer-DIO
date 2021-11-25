import * as Styled from './style';
import React, { useEffect, useState } from "react";
import userGithub from "../../hooks/UserGithub";
import RepositoryItem from "../RepositoryItem";

export const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred } = userGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if(githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);
        // **eslint-disable-next-line react-hooks/exhaustive-deps** \\
    }, [githubState.user.login])

    return(
<>
      {hasUserForSearchrepos ? (
        <Styled.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <Styled.WrapperTabList>
            <Styled.WrapperTab>Repositories</Styled.WrapperTab>
            <Styled.WrapperTab>Starred</Styled.WrapperTab>
          </Styled.WrapperTabList>
          <Styled.WrapperTabPanel>
            <Styled.WrapperList>
              {githubState.repositorieStyled.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </Styled.WrapperList>
          </Styled.WrapperTabPanel>
          <Styled.WrapperTabPanel>
            <Styled.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </Styled.WrapperList>
          </Styled.WrapperTabPanel>
        </Styled.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );

}