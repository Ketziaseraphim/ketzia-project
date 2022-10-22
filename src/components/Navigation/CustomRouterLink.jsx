import React from "react";
import { Link as MainLink } from "react-router-dom";
export default function CustomRouterLink({
  children,
  to,
  disableRoute,
  className,
  onClick,
  key,
}) {
  return disableRoute ? (
    <div className={className} onClick={onClick} key={key}>
      {children}
    </div>
  ) : (
    <MainLink to={to} className={className} onClick={onClick} key={key}>
      {children}
    </MainLink>
  );
}
