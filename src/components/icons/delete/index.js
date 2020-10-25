import React from "react";
import "./index.css";
export const DeleteIcon = ({ color, size, onPress }) => {
  const onClick = () => {
    if (onPress) {
      console.log("onClick");
      onPress();
    }
  };

  return (
    <div className="delete" onClick={onClick}>
      <svg
        id="Layer_1"
        // enable-background="new 0 0 512 512"
        height={size ? size : "1em"}
        width={size ? size : "1em"}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill={color ? color : "red"}
            d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"
          />
          <path
            fill={color ? color : "red"}
            d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"
          />
        </g>
      </svg>
    </div>
  );
};
