import { Colors } from "../../constants";
import styled, { css } from "styled-components";

export const FlexBetween = styled.div<{ direction?: string }>`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${({ direction }) =>
    direction === "column" &&
    css`
      flex-direction: column;
    `}
`;

export const Paragraph = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1.5rem 0;
  color: ${Colors.darkWhite};

  span {
    color: ${Colors.white};
  }

  @media (min-width: 780px) {
    font-size: 20px;
    letter-spacing: 0.75px;
    max-width: 414px;
    margin: 1.5rem auto;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 1px;
  opacity: 0.7;
  margin: 1rem 0;

  a {
    color: ${Colors.green};
  }
`;

export const Clear = styled.span`
  margin: 1rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  li {
    list-style: disc;
    margin: 0.35rem;
    opacity: 0.7;
  }
`;

export const Tabsheader = styled.div<{ version?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.274);
  margin-top: 3rem;

  .tabs {
    color: #ffffff7f;
    padding: 15px;
    text-align: center;
    background: transparent;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
    border: none;
  }

  .active-tabs {
    color: #fff;
    border-radius: 2px;
    border-bottom: 3px solid #4e9060;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    height: 5px;
  }

  ${({ version }) =>
    version === "two" &&
    css`
      display: inline-flex;
      margin-left: calc(50% - 110px);
      margin-top: 0;
      background: #181a22;
      border-radius: 24px;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      min-width: 211px;
      height: 35px;
      padding: 2px 3px;
      gap: 8px;
      outline: none;
      border: 0;

      .tabs {
        font-family: "Brandon";
        outline: none;
        border: none;
      }

      .active-tabs {
        background-color: #44a560;
        border-radius: 24px;
        padding: 4px 16px;

        &::before {
          display: none;
        }
      }
    `}
`;

export const ContentWrapper = styled.div`
  overflow-x: hidden;

  .content {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }

  .active-content {
    padding: 16px 20px;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const BottomWrapper = styled.div`
  margin-top: 10px;
  .maillink {
    text-decoration: underline;
    color: #4e9060;
  }
`;

export const Header = styled.h3`
  font-size: 15px;
  font-family: inherit;
`;

export const Link = styled.a`
  color: #31acd2;
  text-decoration: underline;
`;

export const SubHeading = styled.span`
  font-size: 15px;
  margin-right: 7px;
  font-weight: bold;
`;
