import React from "react";
import type { ComponentPropsWithRef } from "react";
import { useFormContext } from "react-hook-form";

interface RootProps extends ComponentPropsWithRef<"input"> {
  name: string;
}

export const Root = React.forwardRef<HTMLInputElement, RootProps>((props, ref) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(props.name)}
      ref={ref}
      type={props.type || "text"}
      id={props.name}
      className="mb-2 block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      placeholder={props?.placeholder}
    />
  );
});
