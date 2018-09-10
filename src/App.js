import React from 'react';
import GithubUserList from './components/GithubUserList.js';

const getUsersData = ({ id, login, html_url, avatar_url, site_admin }) => ({
  id: id,
  login: login,
  html_url: html_url,
  avatar_url: avatar_url,
  site_admin: site_admin
});

const usersJson = require('./source/users.json');

const users = usersJson.map(getUsersData);

const Container = ({ children }) => (
  <div className="container">
    { children }
  </div>
);


class App extends React.Component {
  render() {
    console.log(users);
    return (
      <Container>
        <div className="row">
          {users.map(
            user => (
              <GithubUserList
                key={user.id}
                login={user.login}
                html_url={user.html_url}
                avatar_url={user.avatar_url}
                site_admin={user.site_admin}
              />)
          )}
        </div>
      </Container>
    );
  }
}
export default App;
