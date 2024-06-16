import React from 'react';

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ src, alt = 'icon', className = '', style }) => {
  return <img className={`icon ${className}`} src={src} alt={alt} style={style} />;
};

export default Icon;