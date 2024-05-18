import React from "react";

export const SimpleHeader = React.forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref}>simple header</div>;
});
