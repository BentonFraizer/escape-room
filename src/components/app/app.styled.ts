// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { createGlobalStyle } from 'styled-components';
// @ts-expect-error TS(2307): Cannot find module 'assets/fonts/raleway-regular.w... Remove this comment to see the full error message
import RalewayRegularWoff2 from 'assets/fonts/raleway-regular.woff2';
// @ts-expect-error TS(2307): Cannot find module 'assets/fonts/raleway-medium.wo... Remove this comment to see the full error message
import RalewayMediumWoff2 from 'assets/fonts/raleway-medium.woff2';
// @ts-expect-error TS(2307): Cannot find module 'assets/fonts/raleway-semibold.... Remove this comment to see the full error message
import RalewaySemiBoldWoff2 from 'assets/fonts/raleway-semibold.woff2';
// @ts-expect-error TS(2307): Cannot find module 'assets/fonts/raleway-bold.woff... Remove this comment to see the full error message
import RalewayBoldWoff2 from 'assets/fonts/raleway-bold.woff2';
// @ts-expect-error TS(2307): Cannot find module 'assets/fonts/raleway-extrabold... Remove this comment to see the full error message
import RalewayExtraBoldWoff2 from 'assets/fonts/raleway-extrabold.woff2';
// @ts-expect-error TS(2307): Cannot find module 'assets/fonts/raleway-black.wof... Remove this comment to see the full error message
import RalewayBlackWoff2 from 'assets/fonts/raleway-black.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url(${RalewayRegularWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    src: url(${RalewayMediumWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: url(${RalewaySemiBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: url(${RalewayBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    src: url(${RalewayExtraBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    src: url(${RalewayBlackWoff2}) format('woff2');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: 'Raleway', Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: ${({
  theme
}: any) => theme.font.base};
    line-height: 22.5px;
    color: ${({
  theme
}: any) => theme.color.whisper};
    font-feature-settings: 'pnum' on, 'lnum' on;

    background-color: ${({
  theme
}: any) => theme.color.nero};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({
  theme
}: any) => theme.color.whisper};
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  /* chrome autofill background removal */
  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px ${({
  theme
}: any) => theme.color.white};

    -webkit-text-fill-color: ${({
  theme
}: any) => theme.color.black};
  }

  /* firefox placeholder \ invalid fix + ios bdrs */
  input {
    border-radius: 0;
  }

  input::placeholder {
    opacity: 1;
  }

  input:invalid {
    box-shadow: none;
  }

  textarea {
    border-radius: 0;
  }

  textarea::placeholder {
    opacity: 1;
  }

  textarea:invalid {
    box-shadow: none;
  }

  select {
    border-radius: 0;
  }

  /* chrome search X removal */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    appearance: none;
  }

  /* input[number] arrows removal */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type='number'] {
    appearance: textfield;
  }

  /* ios button \ inputs reset */
  select,
  textarea,
  input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
    appearance: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: none;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;

    clip: rect(0 0 0 0);
  }

  .prevent-scroll {
    overflow: hidden;
  }
`;

export { GlobalStyle };
