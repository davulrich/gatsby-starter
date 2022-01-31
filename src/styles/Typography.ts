import {createGlobalStyle} from 'styled-components'

// Proxima Nova
import ProximaNova from '../assets/fonts/ProximaNova.woff2'
import ProximaNovaMedium from '../assets/fonts/ProximaNova-Medium.woff2'
import ProximaNovaBold from '../assets/fonts/ProximaNova-Bold.woff2'

// Argent CF
import ArgentCF from '../assets/fonts/ArgentCF-Bold.woff2'

const styled = {createGlobalStyle}

const Typography = styled.createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova';
    src: url(${ProximaNova}) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'ProximaNova';
    src: url(${ProximaNovaMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'ProximaNova';
    src: url(${ProximaNovaBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'ArgentCF';
    src: url(${ArgentCF}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`

export default Typography
