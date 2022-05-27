import React from 'react';
import propTypes from 'prop-types';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;
        {user.followers}&nbsp;<i>seguindo</i>
      </Data>
      {user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
      )}
      {user.location && (
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
      )}
      {user.blog && (
        <Data>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Data>
      )}
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: propTypes.shape({
    login: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatar_url: propTypes.string.isRequired,
    followers: propTypes.number.isRequired,
    following: propTypes.number.isRequired,
    company: propTypes.string,
    blog: propTypes.string,
    location: propTypes.string,
  }).isRequired,
};

export default Profile;
