import styled, { css } from "styled-components";
import { Colors } from "../constants";

export const Wrapper = styled.div`
  position: relative;

  @media (min-width: 980px) {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }
`;

export const Text = styled.p<{
  top?: boolean;
  bottom?: boolean;
  type?: 'hashtag' | 'tiny' | 'small';
  align?: 'center';
  maxWidth?: string;
}>`
  font-family: "Brandon";
  font-size: 20px;
  font-weight: 400;

  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
    width: 100%;
  `}

  ${({ top }) => top && css`
    color: ${Colors.black};
    a {
      color: ${Colors.black};
    }
  `}

  ${({ bottom }) => bottom && css`
    color: ${Colors.white};
  `}

  ${({ type }) => {
    switch (type) {
      case 'hashtag':
        return css`
          color: ${Colors.gold};
          font-size: 32px;
          font-weight: 700;
          font-family: "Brandon";
          font-style: italic;
        `;
      case 'tiny':
        return css`
          font-size: 12px;
          font-weight: 450;
          line-height: 18px;
        `;
      case 'small':
        return css`
          font-size: 16px;
          margin-bottom: 4px;
          font-weight: 390;
        `;
      default:
        return;
    }
  }}

  ${({ align }) => align === "center" && css`
    text-align: center;
  `}
`;

export const TextContainer = styled.div<{
  pos?: 'top' | 'bottom';
  absolute?: boolean;
  pt?: number;
  pb?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  width?: number;
}>`
  z-index: 2;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;

  ${({ px }) => px && css`
    padding-left: ${px}rem;
    padding-right: ${px}rem;
  `}

  ${({ py }) => py && css`
    padding-top: ${py}rem;
    padding-bottom: ${py}rem;
  `}

  ${({ pt }) => pt && css`
    padding-top: ${pt}rem;
  `}

  ${({ pb }) => pb && css`
    padding-bottom: ${pb}rem;
  `}

  ${({ pl }) => pl && css`
    padding-left: ${pl}rem;
  `}

  ${({ pr }) => pr && css`
    padding-right: ${pr}rem;
  `}

  ${({ pos }) => pos === "top" ? css`
    top: 0;
  ` : css`
    bottom: 0;
  `}

  ${({ absolute }) => absolute && css`
    position: absolute;
  `}

  ${({ width }) => width && css`
    width: ${width}px;
    margin: 0 auto;
  `}
`;

export const BarDiv = styled.div<{ top?: boolean; bottom?: boolean; absolute?: boolean }>`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ top }) => top && css`
    height: 59px;
    background: ${Colors.lemon};
  `}

  ${({ bottom }) => bottom && css`
    background: ${Colors.black};
  `}

  ${({ absolute }) => absolute && css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  `}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

export const CoupleImage = styled.div`
  position: relative;
  height: 383px;
  max-height: 400px;
  overflow: hidden;
  margin-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42.04%, #000000 84.99%);
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: 1;
  }

  @media (min-width: 980px) {
    width: 50%;
    height: 100vh;
    max-height: 100vh;

    &::after {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 58.06%, #000000 94.99%);
    }
  }
`;

export const WebsiteContent = styled.div`
  overflow-y: scroll;
  background-color: #000000;

  @media (min-width: 980px) {
    width: 50%;
    height: 100vh;
    padding: 100px 60px 60px;
  }

  @media (max-width: 979px) {
    overflow-y: unset;
  }
`;

export const ButtonContainer = styled.div`
  @media (min-width: 980px) {
    position: absolute;
    width: 100%;
    height: 124px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
  }
`;

export const ShowMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ShowWeb = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;