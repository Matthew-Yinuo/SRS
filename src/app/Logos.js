import React from "react";
import octicons from "octicons";
import cx from "classnames";

const Logo = ({ name, className, ...props }) => {
  if (name in octicons) {
    return (
      <span
        className={cx("Octicon", className)}
        dangerouslySetInnerHTML={{ __html: octicons[name].toSVG(props) }}
      />
    );
  } else {
    throw new Error(`No such octicon: ${name}!`);
  }
};
export default Logo;
