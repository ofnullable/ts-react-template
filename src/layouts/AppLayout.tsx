import React from 'react';
import { css, Global } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';
import { Colors, useThemeContext } from '../contexts/ThemeContext';

const globalStyle = (colors: Colors) => css`
  body {
    color: ${colors.gray[9]};
    background: ${colors.gray[1]};
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: border, background, color;
  }

  main {
    flex: 1;
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
  }
`;

interface AppLayoutProps {
  children: React.ReactChild | React.ReactChildren;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { colors } = useThemeContext();

  return (
    <>
      <Global styles={[globalStyle(colors)]} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
