import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Chris! <br/>
       Welcome to my portfolio
      </SectionTitle>
      <SectionText>
       I am a Front-End Developer and I enjoy designing, developing and testing websites from scratch. 
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1J0r8FvMUALZX2xcH1c_-hpmyh-bZo7KIpp_1ANE7MOc'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;