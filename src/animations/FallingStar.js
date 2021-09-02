import { useEffect, useState, createRef } from "react";
import { DOT, LINE } from "./Constants";
import { TimelineMax } from "gsap";

function FallingStar() {
  const [dotRef, setDotRef] = useState([]);
  const [lineRef, setLineRef] = useState([]);

  const dotLength = DOT.length;
  const lineLength = LINE.length;

  useEffect(() => {
    setDotRef((dotRef) =>
      Array(dotLength)
        .fill()
        .map((_, i) => dotRef[i] || createRef(null))
    );
  }, [dotLength]);

  useEffect(() => {
    setLineRef((elRefs) =>
      Array(lineLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef(null))
    );
  }, [lineLength]);

  useEffect(() => {
    let FirstLinePart = new TimelineMax({ repeat: -1 });
    let LastLinePart = new TimelineMax({ repeat: -1 });

    let FirstDotPart = new TimelineMax({ repeat: -1 });
    let LasDotPart = new TimelineMax({ repeat: -1 });

    console.log(lineRef.length, dotRef.length);

    const half = Math.ceil(lineRef.length / 2);
    const firstLines = lineRef.splice(0, half);
    const lastLines = lineRef.splice(-half);

    const Half = Math.ceil(dotRef.length / 2);

    const firstDots = dotRef.splice(0, Half);
    const secondHalf = dotRef.splice(-Half);

    firstLines.forEach((el) => {
      const current = el.current;

      FirstLinePart.from(current, 0.2, { x: 0, y: -50, opacity: 0 })
        .to(current, 0.1, {
          x: 0,
          y: 0,
          opacity: "0.5",
        })
        .to(current, 0.3, { opacity: "0" });
    });

    firstDots.forEach((dot) => {
      const current = dot.current;

      FirstDotPart.from(current, 0.2, { x: 0, y: -48, opacity: 0 })
        .to(current, 0.1, {
          x: 0,
          y: 0,
          opacity: "0.5",
        })
        .to(current, 0.3, { opacity: "0" });
    });

    lastLines.forEach((el) => {
      const current = el.current;
      LastLinePart.from(current, 0.3, { x: 0, y: -50, opacity: 0 })
        .to(current, 0.3, {
          x: 0,
          y: 0,
          opacity: "0.5",
        })
        .to(current, 0.2, { opacity: "0" });
    });

    secondHalf.forEach((dot) => {
      const current = dot.current;
      LasDotPart.from(current, 0.3, { x: 0, y: -48, opacity: 0 })
        .to(current, 0.3, {
          x: 0,
          y: 0,
          opacity: "0.5",
        })
        .to(current, 0.2, { opacity: "0" });
    });
  }, [lineRef, dotRef]);

  return (
    <svg
      width="261"
      height="554"
      viewBox="0 0 261 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {LINE.map((el, i) => (
        <path key={i} d={el.d} fill={el.fill} ref={lineRef[i]} />
      ))}
      {DOT.map((el, i) => (
        <path key={i} d={el.d} fill={el.fill} ref={dotRef[i]} />
      ))}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="180.224"
          y1="315.457"
          x2="180.224"
          y2="245.437"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="180.227"
          y1="315.456"
          x2="180.227"
          y2="245.438"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="-2.53013"
          y1="205.897"
          x2="-2.53013"
          y2="135.856"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="47.557"
          y1="111.226"
          x2="47.557"
          y2="41.2065"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="47.5568"
          y1="111.225"
          x2="47.5568"
          y2="41.2073"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="87.7946"
          y1="131.676"
          x2="87.7946"
          y2="61.6535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="87.7946"
          y1="131.676"
          x2="87.7946"
          y2="61.6568"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="153.431"
          y1="361.411"
          x2="153.431"
          y2="291.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="153.432"
          y1="361.404"
          x2="153.432"
          y2="291.386"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="215.771"
          y1="102.282"
          x2="215.771"
          y2="32.2625"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="215.77"
          y1="102.281"
          x2="215.77"
          y2="32.263"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="104.593"
          y1="98.3314"
          x2="104.593"
          y2="28.3118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint12_linear"
          x1="104.594"
          y1="108.507"
          x2="104.594"
          y2="73.4979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint13_linear"
          x1="256.542"
          y1="321.981"
          x2="256.542"
          y2="251.961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint14_linear"
          x1="256.542"
          y1="332.157"
          x2="256.542"
          y2="297.148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint15_linear"
          x1="24.771"
          y1="86.2509"
          x2="24.771"
          y2="16.2097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint16_linear"
          x1="24.7711"
          y1="96.4351"
          x2="24.7711"
          y2="61.4255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint17_linear"
          x1="155.018"
          y1="24.6352"
          x2="155.018"
          y2="-45.3847"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint18_linear"
          x1="155.02"
          y1="34.8103"
          x2="155.02"
          y2="-0.195785"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint19_linear"
          x1="98.9571"
          y1="350.188"
          x2="98.9571"
          y2="280.168"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint20_linear"
          x1="98.9558"
          y1="350.188"
          x2="98.9558"
          y2="280.168"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint21_linear"
          x1="214.887"
          y1="302.964"
          x2="214.887"
          y2="232.923"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint22_linear"
          x1="214.888"
          y1="302.97"
          x2="214.888"
          y2="232.952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint23_linear"
          x1="20.7345"
          y1="510.33"
          x2="20.7345"
          y2="385.631"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint24_linear"
          x1="20.7358"
          y1="479.128"
          x2="20.7358"
          y2="249.739"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint25_linear"
          x1="191.548"
          y1="334.534"
          x2="191.548"
          y2="209.835"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint26_linear"
          x1="191.55"
          y1="303.331"
          x2="191.55"
          y2="73.9432"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint27_linear"
          x1="83.0448"
          y1="424.523"
          x2="83.0448"
          y2="299.825"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint28_linear"
          x1="83.0461"
          y1="393.319"
          x2="83.0461"
          y2="163.932"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint29_linear"
          x1="168.33"
          y1="186.369"
          x2="168.33"
          y2="61.632"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint30_linear"
          x1="168.33"
          y1="185.724"
          x2="168.33"
          y2="58.8085"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A4FFFF" />
          <stop offset="1" stopColor="#A4FFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default FallingStar;
