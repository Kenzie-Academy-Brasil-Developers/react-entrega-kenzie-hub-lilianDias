import React from "react";

export const Text = ({ children, className, tag, click }) => {
  return (
    <>
      {tag === "h1" && (
        <h1 onClick={click} className={className}>
          {children}
        </h1>
      )}
      {tag === "h2" && (
        <h2 onClick={click} className={className}>
          {children}
        </h2>
      )}
      {tag === "h3" && (
        <h3 onClick={click} className={className}>
          {children}
        </h3>
      )}
      {tag === "p" && (
        <p onClick={click} className={className}>
          {children}
        </p>
      )}
      {tag === "span" && (
        <span onClick={click} className={className}>
          {children}
        </span>
      )}
    </>
  );
};
