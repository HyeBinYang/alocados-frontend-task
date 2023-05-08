import React, { FC } from "react";
import { IconProps } from "./type";

const ChevronDown: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929L12 12.5858L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L8.29289 11.7071C7.90237 11.3166 7.90237 10.6834 8.29289 10.2929Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3572 3H13.6428C14.7266 2.99999 15.6007 2.99998 16.3086 3.05782C17.0375 3.11737 17.6777 3.24318 18.27 3.54497C19.2108 4.02433 19.9757 4.78924 20.455 5.73005C20.7568 6.32234 20.8826 6.96253 20.9422 7.69138C21 8.39925 21 9.27339 21 10.3572V13.6428C21 14.7266 21 15.6008 20.9422 16.3086C20.8826 17.0375 20.7568 17.6777 20.455 18.27C19.9757 19.2108 19.2108 19.9757 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9422C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9422C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3.24318 17.6777 3.11737 17.0375 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27341 2.99998 8.39926 3.05782 7.69138C3.11737 6.96253 3.24318 6.32234 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.32234 3.24318 6.96253 3.11737 7.69138 3.05782C8.39926 2.99998 9.27341 2.99999 10.3572 3ZM7.85424 5.05118C7.24907 5.10062 6.90138 5.19279 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5.19279 6.90138 5.10062 7.24907 5.05118 7.85424C5.00078 8.47108 5 9.26339 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1458C5.10062 16.7509 5.19279 17.0986 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8994 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8994 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C18.8072 17.0986 18.8994 16.7509 18.9488 16.1458C18.9992 15.5289 19 14.7366 19 13.6V10.4C19 9.26339 18.9992 8.47108 18.9488 7.85424C18.8994 7.24907 18.8072 6.90138 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C17.0986 5.19279 16.7509 5.10062 16.1458 5.05118C15.5289 5.00078 14.7366 5 13.6 5H10.4C9.26339 5 8.47108 5.00078 7.85424 5.05118Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;