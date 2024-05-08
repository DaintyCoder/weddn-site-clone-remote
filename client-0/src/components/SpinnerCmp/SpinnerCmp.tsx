import React from "react";
import { SpinnerCircular } from "spinners-react";

interface SpinnerCmpProps {
  enabled?: boolean;
  size?: number;
  thickness?: number;
  color?: string;
  secondaryColor?: string;
}

const SpinnerCmp: React.FC<SpinnerCmpProps> = ({
  enabled = false,
  size = 50,
  thickness = 100,
  color = 'blue', // Assuming default colors if not provided
  secondaryColor = 'gray'
}) => {
  if (!enabled) return null;

  return (
    <SpinnerCircular
      size={size}
      thickness={thickness}
      color={color}
      secondaryColor={secondaryColor}
    />
  );
};

export default SpinnerCmp;