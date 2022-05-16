import React from "react";
import MertflixLogo from '../../../images/mertflix-logo.svg';
import TmdbLogo from '../../../images/tmdb_logo.svg';

import { Wrapper, Content, MertflixLogoImg, TmdbLogoImg } from './Header.styles'


const Header = () => (
  <Wrapper>
    <Content>
      <MertflixLogoImg src={MertflixLogo} alt='mertflix-logo'/>
      <TmdbLogoImg src={TmdbLogo} alt='tmdb-logo'/>
    </Content>
  </Wrapper>
);


export default Header;
