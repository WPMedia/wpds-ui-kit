import * as React from "react";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import { css } from "@washingtonpost/wpds-theme";

const NAME = "Icon";

interface IconInterface extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  size?: "$100" | "$150" | "$200" | number;
  label: string;
  children?: React.ReactNode;
  className?: string;
}

export const Icon = React.forwardRef<HTMLOrSVGImageElement, IconInterface>(
  ({ children, size = "$100", label, className = "", ...props }, ref) => {
    const child = React.Children.only(children);

    const IconSizeStyle = css({
      width: size,
      height: size,
      fill: "currentColor",
    });

    return (
      <>
        {React.cloneElement(child as React.ReactElement, {
          "aria-hidden": true,
          focusable: false,
          role: "img",
          ref,
          className: `${IconSizeStyle()} ${className}`,
          ...props,
        })}
        {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
      </>
    );
  }
);

type IconProps = React.ComponentPropsWithRef<typeof Icon>;

Icon.displayName = NAME;

export type { IconProps, IconInterface };
