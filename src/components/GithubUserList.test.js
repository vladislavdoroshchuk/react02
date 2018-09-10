import React from 'react';
import renderer from 'react-test-renderer';
import GithubProfile from './GithubUserList';

describe('<GithubProfile>', () => {
  it('should renders without crashing', () => {
    const userData = renderer.create(
      <GithubProfile
        name="Vlad"
        login="github login"
        company="company"
        location="Kiev"
        following="2"
        followers="3"
        avatar_url="img.jpg"
        public_repos="4"
      />
    );
  });
});
