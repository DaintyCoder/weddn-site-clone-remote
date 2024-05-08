import { css } from "@emotion/react";

export const GlobalStyles = css`
  body {
    height: 100%;
    overflow: auto;
    background-color: #16181d;
    color: #fff;
  }

  /* Applying styles to disable scrollbar across browsers */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }


  /* .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    width: 0px;
  }
  .no-scrollbar::-webkit-scrollbar-thumb {
    display: none;
  } */


    /* Scrollbar Styles:
    The scrollbar styles are consolidated under the .no-scrollbar class to avoid redundancy and ensure all related styles are grouped
    together.
    The pseudo-element ::-webkit-scrollbar is nested within .no-scrollbar using Emotion's support for SCSS-like syntax. This makes it 
    clear that these styles are specifically for elements with the no-scrollbar class */.

`;