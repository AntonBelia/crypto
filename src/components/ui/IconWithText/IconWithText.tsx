import React from "react";
import Icon from "../Icon/Icon";

import "./IconWithText.scss";

interface IconWithTextProps {
  src: string;
  alt: string;
  text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ src, alt, text }) => {
  return (
    <div className="item">
      <Icon className="item__icon" src={src} alt={alt} />
      <span className="item__text">{text}</span>
    </div>
  );
};

export default IconWithText;
