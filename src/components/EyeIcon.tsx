import React, { forwardRef } from 'react';

const EyeIcon = forwardRef<SVGSVGElement, {
  className?: string;
  style?: React.CSSProperties;
}>(({ className = '', style = {} }, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 140 140"
    width={140}
    height={140}
    className={className}
    style={style}
  >
    <circle cx="70" cy="70" r="70" fill="#FF79D7" />

    <g className="eyelid">
      <path d="M30.8988 68.8028C50.904 44.3499 88.2918 44.3499 108.297 68.8028L111.402 72.598L107.438 77.1873C87.4952 100.278 51.7006 100.278 31.7576 77.1873L27.7939 72.598L30.8988 68.8028Z" fill="#201F1F" />
    </g>

    <circle cx="70" cy="73" r="12" fill="#FF79D7" />
  </svg>
));

export default EyeIcon;