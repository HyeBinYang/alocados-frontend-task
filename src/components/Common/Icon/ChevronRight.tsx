import React, { FC } from "react";
import { IconProps } from "./type";

const ChevronRight: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33337 8.00001C1.33337 4.31811 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00001ZM7.80478 5.52861C7.54443 5.26826 7.12232 5.26826 6.86197 5.52861C6.60162 5.78896 6.60162 6.21107 6.86197 6.47141L8.39057 8.00001L6.86197 9.52861C6.60162 9.78896 6.60162 10.2111 6.86197 10.4714C7.12232 10.7318 7.54443 10.7318 7.80478 10.4714L9.80478 8.47142C10.0651 8.21107 10.0651 7.78896 9.80478 7.52861L7.80478 5.52861Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
