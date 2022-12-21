import React from "react";

type TTypography =
  | "headline"
  | "title"
  | "subtitle"
  | "body"
  | "menu-default"
  | "menu-active";

type TText = {
  children: React.ReactNode;
  variant: TTypography;
  className?: string;
};

export const Text = ({ children, variant, className }: TText) => {
  switch (variant) {
    case "headline":
      return (
        <h1 className={`font-bold text-2xl text-gray-400 ${className}`}>
          {children}
        </h1>
      );

    case "title":
      return (
        <h3 className={`font-semibold text-xl text-gray-400 ${className}`}>
          {children}
        </h3>
      );

    case "subtitle":
      return (
        <h4 className={`font-medium text-base text-gray-400 ${className}`}>
          {children}
        </h4>
      );

    case "body":
      return (
        <p className={`font-light text-sm text-gray-300 ${className}`}>
          {children}
        </p>
      );

    case "menu-default":
      return (
        <a className={`font-normal text-base text-gray-400 ${className}`}>
          {children}
        </a>
      );

    case "menu-active":
      return (
        <a className={`font-medium text-base text-active ${className}`}>
          {children}
        </a>
      );

    default:
      return <p className={className}>{children}</p>;
  }
};
