import React from "react";

export const DefaultHeader = React.forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref}>default header</div>;
});
