import React from "react";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";

export const HeaderMenu = () => {
  return (
    <div
      style={{
        display: "grid",
        flex: "1",
        gridTemplateColumns: "auto auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <LeftMenu />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "240px",
        }}
      >
        <RightMenu />
      </div>
    </div>
  );
};
