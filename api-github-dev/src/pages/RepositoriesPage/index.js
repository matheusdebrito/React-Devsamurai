import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'devsamurai',
    name: 'Dev Samurai',
    avatar_url: 'https://avatars.githubusercontent.com/u/55540536?v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://devsamurai.com.br',
    location: 'São José dos Campos - SP',
  };

  // const repositories = [
  //   {
  //     name: 'Repo 1',
  //     description: 'Descrição',
  //     html_url: 'https://www.devsamurai.com.br',
  //     language: 'Javascript',
  //   },
  //   {
  //     name: 'Repo 2',
  //     description: 'Descrição',
  //     html_url: 'https://www.devsamurai.com.br',
  //     language: 'Javascript',
  //   },
  //   {
  //     name: 'Repo 3',
  //     description: 'Descrição',
  //     html_url: 'https://www.devsamurai.com.br',
  //     language: 'PHP',
  //   },
  //   {
  //     name: 'Repo 4',
  //     description: 'Descrição',
  //     html_url: 'https://www.devsamurai.com.br',
  //     language: 'Ruby',
  //   },
  //   {
  //     name: 'Repo 5',
  //     description: 'Descrição',
  //     html_url: 'https://www.devsamurai.com.br',
  //     language: 'Java',
  //   },
  //   {
  //     name: 'Repo 6',
  //     description: 'Descrição',
  //     html_url: 'https://www.devsamurai.com.br',
  //     language: 'Typescript',
  //   },
  // ];

  // Calculo dos filters
  const languages = [
    { name: 'Javascript', count: 3, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 2, color: '#3498db' },
    { name: 'Ruby', count: 1, color: '#e74c3c' },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
