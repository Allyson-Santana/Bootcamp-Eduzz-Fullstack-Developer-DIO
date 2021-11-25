import React from 'react';
import {
  Layout, 
  Profile, 
  Repositories,
  NoSearch
} from './components';
import UserGithub from './hooks/UserGithub';

const App = () => {

const { githubState } = UserGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {
            githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )
          }
        </>
      ) : (
        <NoSearch />
      )

      }
    </Layout>
  );
}

export default App;
