import Realtimecontext from "./Realtimecontext";
import React, { useState } from "react";

const Realtimestate = (props) => {
  const [username, setusername] = useState("");
  const [client, setclient] = useState([]);

  return (
    <Realtimecontext.Provider
      value={{ username, setusername, client, setclient }}
    >
      {props.children}
    </Realtimecontext.Provider>
  );
};
export default Realtimestate;
