import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <path
          className="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <path
          className="letter"
          d="M 176 84.5 H 211 L 218 91.5 V 101 H 208 V 92.5 H 182 V 101 H 211 L 218 108 V 125 L 211 132 H 176 L 169 125 V 115.5 H 179 V 124 H 205 V 115.5 H 176 L 169 108.5 V 91.5 Z"
          stroke={theme.body}
          strokeWidth="3"
        />
        <path
          className="letter"
          d="M 229.5 158 V 150 H 235.5 V 133 L 221 116.5 H 217 V 110.5 H 237 V 116.5 H 233 L 241.5 126.5 L 250 116.5 H 246 V 110.5 H 266 V 116.5 H 262 L 247.5 133 V 150 H 253.5 V 158 Z"
          stroke={theme.body}
          strokeWidth="3"
        />
        <text
          x="220"
          y="272"
          textAnchor="middle"
          className="splash-name"
          fill={theme.body}
          stroke={theme.body}
          strokeWidth="0.5"
          style={{
            fontFamily: "'Agustina Regular', 'Agustina', cursive",
            fontSize: "38px",
            letterSpacing: "1.5px",
          }}
        >
          Sumit Yadav
        </text>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
      .letter {
        opacity: 0;
        -webkit-animation: fadein 2s linear forwards 2s;
        -o-animation: fadein 2s linear forwards 2s;
        -moz-animation: fadein 2s linear forwards 2s;
        animation: fadein 2s linear forwards 2s;
      }

      .splash-name {
        opacity: 0;
        -webkit-animation: fadein 2.2s ease-in-out forwards 1.2s;
        -o-animation: fadein 2.2s ease-in-out forwards 1.2s;
        -moz-animation: fadein 2.2s ease-in-out forwards 1.2s;
        animation: fadein 2.2s ease-in-out forwards 1.2s;
      }

      .myHexagon {
        stroke-dasharray: 800;
        stroke-dashoffset: 800;
        -webkit-animation: dash 4s linear forwards 0.5s;
        -o-animation: dash 4s linear forwards 0.5s;
        -moz-animation: dash 4s linear forwards 0.5s;
        animation: dash 4s linear forwards 0.5s;
      }

      @-webkit-keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @-webkit-keyframes dash {
        from {
          stroke-dashoffset: 800;
        }
        to {
          stroke-dashoffset: 0;
        }
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes dash {
        from {
          stroke-dashoffset: 800;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
    `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
