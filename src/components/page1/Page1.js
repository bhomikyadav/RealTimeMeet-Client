import React, { useEffect, useState, useContext, useRef } from "react";
import PageNav from "./PageNav";
import Section from "./sections/Section";
import { useParams, Navigate } from "react-router-dom";
import Realtimecontext from "../../context/Realtimecontext";
import { initSocket } from "../../sockets.js";
import { ACTIONS } from "../../Action";

function Page1() {
  const Rtcontext = useContext(Realtimecontext);

  const { roomId } = useParams();

  return (
    <>
      {roomId && Rtcontext.username !== "" ? (
        <>
          {" "}
          <div
            style={{
              backgroundColor: "black",
              opacity: "0.9",
              paddingBottom: "2.4vh",
            }}
          >
            <PageNav />
            <Section roomId={roomId} />
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Page1;
