// Importing necessary functions from styled-components for styling
import styled, { css } from "styled-components";

// Styled span component for actions, possibly used as a button or indicator
export const Action = styled.span<{ version?: string }>`
  font-weight: bold; // Makes text bold
  height: 35px; // Fixed height
  width: 35px; // Fixed width
  padding: 10px; // Padding around the text
  font-size: 15px; // Text size
  background: #e8d6bb; // Light brown background color
  border-radius: 50%; // Circle shape
  display: inline-block; // Allows the span to sit inline with other elements

  // Conditional styling based on the 'version' prop
  ${({ version }) =>
    version === "two" &&
    css`
      font-weight: normal; // Normal font weight for version two
      background: transparent; // Transparent background for version two
      border-radius: none; // No border radius (square shape) for version two
    `}
`;

// Styled button component
export const Button = styled.button<{ version?: string }>`
  background: transparent; // Transparent background
  color: #b48238; // Bronze-like color for the text
  display: flex; // Flexbox display to align children
  justify-content: center; // Center children horizontally
  align-items: center; // Center children vertically
  border: none; // No border
  padding: 0; // No padding
  span {
    line-height: 1; // Line height for any span inside the button
  }
`;

// Styled div component for an accordion item wrapper
export const AccordionItemWrapper = styled.div<{ version?: string }>`
  // Conditional styling based on the 'version' prop
  ${({ version }) =>
    version === "two" &&
    css`
      background: #0e1018; // Dark background for version two
      border-radius: 16px; // Rounded corners for version two
      margin-bottom: 0.5rem; // Bottom margin for spacing

      p {
        padding: 11px 16px; // Padding inside any paragraph
      }
    `}
`;

// Styled div component for an accordion item
export const AccordionItem = styled.div<{ version?: string }>`
  display: flex; // Flexbox display to align children
  justify-content: space-between; // Space between children horizontally
  align-items: center; // Align children vertically
  h3 {
    margin: 0; // No margin for h3 to remove default styling
  }

  // Conditional styling based on the 'version' prop
  ${({ version }) =>
    version === "two" &&
    css`
      background-color: #22242c; // Darker background for version two
      border-radius: 16px; // Rounded corners for version two
      padding: 10px 16px; // Padding inside the accordion item

      h3 {
        font-size: 16px; // Smaller font size for h3 in version two
        font-weight: 390; // Specific font weight for h3 in version two
      }
    `}
`;