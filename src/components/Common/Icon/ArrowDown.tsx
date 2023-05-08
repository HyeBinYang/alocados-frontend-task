import React, { FC } from "react";
import { IconProps } from "./type";

const ArrowDown: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.47132 10.3619C5.21097 10.1016 4.78886 10.1016 4.52851 10.3619C4.26816 10.6223 4.26816 11.0444 4.52851 11.3047L7.52851 14.3047C7.78886 14.5651 8.21097 14.5651 8.47132 14.3047L11.4713 11.3047C11.7317 11.0444 11.7317 10.6223 11.4713 10.3619C11.211 10.1016 10.7889 10.1016 10.5285 10.3619L8.66658 12.2239L8.66658 3.16667C8.66658 2.79848 8.36811 2.5 7.99992 2.5C7.63173 2.5 7.33325 2.79848 7.33325 3.16667L7.33325 12.2239L5.47132 10.3619Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
