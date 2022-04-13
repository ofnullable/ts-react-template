import React from 'react';
import { css } from '@emotion/react';
import { useThemeContext } from '../contexts/ThemeContext';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const footerStyle = css`
  padding: 40px 16px;

  & > nav {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const iconStyle = (isLight: boolean) => css`
  width: 2rem;
  height: 2rem;
  stroke: ${isLight ? '#000' : '#fff'};
`;

const Footer = () => {
  const { isLight } = useThemeContext();

  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>{new Date().getFullYear()} &copy; your copyright</div>
        <div>
          <a href="https://github.com/ofnullable/ts-react-template" rel="noopener noreferrer" target="_blank">
            <GithubIcon css={iconStyle(isLight)} className="github" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
