import React, { FC, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = (props) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
