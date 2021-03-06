import React from "react";
import "./index.css";
export const SaveIcon = ({ color, size, onPress, style }) => {
  const onClick = () => {
    if (onPress) {
      onPress();
    }
  };
  // style={style ? style : null}
  return (
    <div style={style ? style : null} onClick={onClick}>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        height={size ? size : "1.5em"}
        width={size ? size : "1.5em"}
        viewBox="0 0 512 512"
        // style="enable-background:new 0 0 512 512;"
        // xml:space="preserve"
      >
        <circle fill={"#FFD400"} cx="256" cy="256" r="256" />
        <path
          fill={"#FF9F00"}
          d="M510.423,284.408L346.133,117L117,395l115.956,115.956C240.549,511.634,248.231,512,256,512
   C387.781,512,496.287,412.422,510.423,284.408z"
        />
        <polygon
          fill={"#5A5A5A"}
          points="395,170.591 395,395 329.844,395 329.844,280.977 182.156,280.977 182.156,395 117,395 
   117,117 182.156,117 182.156,214.734 329.844,214.734 329.844,117 346.133,117 "
        />
        <polygon
          fill={"#444444"}
          points="395,170.591 395,395 329.844,395 329.844,280.977 256,280.977 256,214.734 329.844,214.734 
   329.844,117 346.133,117 "
        />
        <g>
          <path
            fill={"#E7E7E7"}
            d="M165.867,264.688V395h180.266V264.688H165.867z"
          />
          <path
            fill={"#E7E7E7"}
            d="M165.867,117v114.023h180.266V117H165.867z"
          />
        </g>
        <g>
          <rect
            x="256"
            y="117"
            fill={"#D3D3D8"}
            width="90.13"
            height="114.02"
          />
          <rect
            x="256"
            y="264.69"
            fill={"#D3D3D8"}
            width="90.13"
            height="130.31"
          />
        </g>
        <rect
          x="264.14"
          y="117"
          fill={"#444444"}
          width="49.41"
          height="81.44"
        />
        <rect
          x="214.73"
          y="313.56"
          fill={"#D3D3D8"}
          width="82.53"
          height="16.289"
        />
        <rect
          x="256"
          y="313.56"
          fill={"#BABAC0"}
          width="41.27"
          height="16.289"
        />
      </svg>
    </div>
  );
};
