import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
      background: var(--background);

      font-size: 1.25rem;
      color: var(--title);
      letter-spacing: 0.4px;
  }

  *, button, input {
      border: 0;
      outline: 0;
      font-family: 'Source Sans', sans-serif;
  }

  h1 {
      font-size: 2.625rem;
      color: var(--title);
      letter-spacing: 0.84px;
  }

  h2 {
      font-size: 2.25rem;
      color: var(--title);
      letter-spacing: 0.72px;
  }

  h3 {
      font-size: 1.875rem;
      color: var(--title);
      letter-spacing: 0.6px;
  }

  h4 {
      font-size: 1.625rem;
      color: var(--title);
      letter-spacing: 0.52px;
  }

  h5 {
      font-size: 1.5rem;
      color: var(--title);
      letter-spacing: 0.48px;
  }

  :root {
      --background: #FCFCFD;
      --title: #170C3A;

      --white: #FFFFFF;
      --darkWhite: #FCFCFD;
      --darkerWhite: #F5F4F6;
      --darkestWhite: #EBEAED;
      --mostDarkestWhite: #DEDCE1;

      --ink: #170C3A;
      --lightInk: #8F8A9B;
      --lighterInk: #B1ADB9;
      --lightestInk: #C7C4CD;

      --darkerBlue: #244AA8;
      --darkBlue: #2F55CC;
      --blue: #365DF0;
      --lightBlue: #9AAEF7;
      --lighterBlue: #B9C6FA;
      --lightestBlue: #CAD6FC;
      --mostLightestBlue: #E1E7FD;

      --darkerGreen: #0E995D;
      --darkGreen: #10B26C;
      --green: #12DB89;
      --lightGreen: #88EDC4;
      --lighterGreen: #B7F7D8;
      --lightestGreen: #CFF9E6;
      --mostLightestGreen: #E7FBF3;

      --darkerRed: #A53F3F;
      --darkRed: #CC4C4C;
      --red: #F95E5A;
      --lightRed: #FCAEAC;
      --lighterRed: #FCC6C5;
      --lightestRed: #FCD7D6;
      --mostLightestRed: #FEEFEE;

      --darkerYellow: #996C2B;
      --darkYellow: #D89C3A;
      --yellow: #FFBB43;
      --lightYellow: #FFDDA1;
      --lighterYellow: #FFF8EC;

      --darkerPurple: #353372;
      --darkPurple: #4C4499;
      --purple: #6554C0;
      --lightPurple: #B2A9DF;
      --lighterPurple: #EFEEF9;

      --darkerTeal: #2497B2;
      --darkTeal: #2BAFD8;
      --teal: #30C3FC;
      --lightTeal: #98E1FE;
      --lighterTeal: #EAF9FF;
  }
`;
