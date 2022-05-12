import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:christopher.vazquez2015@gmail.com">christopher.vazquez2015@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <SocialIcons href="https://github.com/ChrisVaz1995">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/chrisvazquez95/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
