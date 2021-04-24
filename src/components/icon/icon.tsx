import React from "react";

import { Svg } from "./styles";

export type iconName =
| "facebook"
| "gerb"
| "instagram"
| "join"
| "telegam"
| "youtube"
| "banki"
| "comersant"
| "forbs"
| "rbk"
| "republic"
| "vc"
| "vision";

interface IProps {
  iconName: iconName;
  className?: string;
}

const Icon = ({ iconName, className = "" }: IProps) => {
  return (
    <Svg className={className}>
      <use xlinkHref={`/svg/icons-sprite.svg#${iconName}`} />
    </Svg>
  );
};

export default Icon;