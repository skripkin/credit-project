import React from "react";

import { Svg } from "./styles";

export type iconName =
| "facebook"
| "gerb"
| "instagram"
| "join"
| "telegam"
| "youtube";

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