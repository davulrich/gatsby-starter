import {createGlobalStyle} from 'styled-components'
import {mediaUp, breakpoints} from '../helpers/media-queries'

const styled = {createGlobalStyle}

const GlobalStyle = styled.createGlobalStyle`
  :root {
    // Colors
    --c-primary: #5e3687;
    --c-secondary: #40b5a6;
    --c-gray: #f0f0f0;
    --c-white: #ffffff;

    // Fonts
    --ff-base: 'ProximaNova', serif;
    --ff-secondary: 'ArgentCF', sans-serif;

    --fs-plus-6: 2.5rem;
    --fs-plus-5: 1.625rem;
    --fs-plus-4: 1.4375rem;
    --fs-plus-3: 1.125rem;
    --fs-plus-2: 1.125rem;
    --fs-plus-1: 1rem;
    --fs-base: 0.875rem;
    --fs-minus-1: 0.75rem;
    --fs-minus-2: 0.6875rem;

    --lh-plus-5: 1.38;
    --lh-plus-4: 1.39;
    --lh-plus-3: 1.56;
    --lh-plus-2: 1.56;
    --lh-plus-1: 1.5;
    --lh-base: 1.7;
    --lh-minus-1: 1.5;
    --lh-minus-2: 1.27;

    // BS Variables
    --bs-primary-rgb: 94, 53, 135;
    --bs-secondary-rgb: 64, 181, 166;
    --bs-dark-rgb: var(--bs-primary-rgb);

    ${mediaUp(breakpoints.md)} {
      --fs-plus-6: 2.725rem;
      --fs-plus-5: 1.75rem;
      --fs-plus-4: 1.5rem;
      --fs-plus-3: 1.25rem;
      --fs-plus-2: 1.125rem;
      --fs-plus-1: 1.125rem;
      --fs-base: 0.9375rem;
      --fs-minus-1: 0.8125rem;
      --fs-minus-2: 0.75rem;

      --lh-plus-5: 1.42;
      --lh-plus-4: 1.5;
      --lh-plus-3: 1.6;
      --lh-plus-2: 1.56;
      --lh-plus-1: 1.56;
      --lh-base: 1.6;
      --lh-minus-1: 1.54;
      --lh-minus-2: 1.33;
    }

    ${mediaUp(breakpoints.lg)} {
      --fs-plus-6: 3.5rem;
      --fs-plus-5: 2.875rem;
      --fs-plus-4: 2.375rem;
      --fs-plus-3: 1.575rem;
      --fs-plus-2: 1.255rem;
      --fs-plus-1: 1.125rem;
      --fs-base: 1rem;
      --fs-minus-1: 0.875rem;
      --fs-minus-2: 0.75rem;

      --lh-plus-5: 1.3;
      --lh-plus-4: 1.37;
      --lh-plus-3: 1.33;
      --lh-plus-2: 1.45;
      --lh-plus-1: 1.56;
      --lh-base: 1.75;
      --lh-minus-1: 1.57;
      --lh-minus-2: 1.33;
    }
  }

  html {
    scroll-padding-top: 58px;

    ${mediaUp(breakpoints.lg)} {
      scroll-padding-top: 76px;
    }
  }

  body {
    font-size: var(--fs-base);
    font-weight: 500;
  }
`
export default GlobalStyle
