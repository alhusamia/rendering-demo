"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("batman");
  return (
    <>
      <h1> client component one</h1>
      <ClientComponentTwo />
      {children}
      {/* you cant add server compenet inside client compenent , pattern not supported */}
      {/* NOTE */}
      {/* you cant inport server comp indside client comp directly because the client comp render after server comp */}
      {/* <ServerComponentOne/> */}
    </>
  );
};
