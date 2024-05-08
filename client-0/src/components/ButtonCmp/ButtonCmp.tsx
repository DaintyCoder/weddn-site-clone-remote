import { Button } from "@chakra-ui/react";
import SpinnerCmp from "../SpinnerCmp/SpinnerCmp";
import React from "react";

export interface IButtonProps {
  as?: React.ElementType; // Adding as?: React.ElementType; allows you to specify any React component or HTML tag as the element type for the component, making it more flexible.
  margin?: string;
  padding?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  fontSize?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  color?: string;
  borderRadius?: string;
  fontWeight?: string;
  opacity?: string;
  size?: "lg" | "md" | "sm" | "xs";
  border?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  textHoverColor?: string;
  backgroundHoverColor?: string;
  borderHoverState?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  text: React.ReactNode;
}

const ButtonCmp: React.FC<IButtonProps> = ({
  margin = "0",
  padding = "1rem 2rem",
  size = "md",
  color = "#fff",
  backgroundColor = "#4DB168",
  isDisabled = false,
  isLoading = false,
  fontSize = "15px",
  borderRadius = "18px",
  fontWeight = 400,
  opacity = "1",
  border = "none",
  width = "fit-content",
  height = "64px",
  maxWidth = "fit-content",
  textHoverColor = "#fff",
  backgroundHoverColor = "#4DB168d7",
  borderHoverState = "none",
  type = "submit",
  onClick,
  text,
}) => {
  return (
    <Button
      _focus={{ outline: "none", boxShadow: "none" }}
      _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
      type={type}
      margin={margin}
      padding={padding}
      size={size}
      outline="none"
      color={color}
      backgroundColor={backgroundColor}
      isDisabled={isDisabled}
      isLoading={isLoading}
      fontSize={fontSize}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      opacity={opacity}
      border={border}
      width={width}
      height={height}
      maxWidth={maxWidth}
      _hover={{
        color: textHoverColor,
        backgroundColor: backgroundHoverColor,
        border: borderHoverState,
      }}
      _active={{
        color: textHoverColor,
        backgroundColor: backgroundHoverColor,
        border: borderHoverState,
      }}
      onClick={onClick}
    >
      {isLoading ? (
        <SpinnerCmp enabled={true} color="#000" size={20} secondaryColor="#fff" />
      ) : (
        text
      )}
    </Button>
  );
};

export default ButtonCmp;