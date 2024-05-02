import React from 'react';

const LiYCircleIcon: React.FC = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <rect width="40" height="40" fill="url(#pattern0_201_3167)"/>
      <defs>
      <pattern id="pattern0_201_3167" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use href="#image0_201_3167" transform="scale(0.00694444)"/>
      </pattern>
      <image id="image0_201_3167" width="144" height="144" href="data:image/png;base64,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"/>
      </defs>
    </svg>

  );
};

export default LiYCircleIcon;