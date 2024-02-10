import React, { useEffect, useContext, useRef } from "react";
import { initSocket } from "../../../../sockets";
import ACTIONS from "../../../../Action";
import Realtimecontext from "../../../../context/Realtimecontext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Section2({ roomId }) {
  const Navigator = useNavigate();
  const Rtcontext = useContext(Realtimecontext);

  const socketref = useRef(null);
  const textref = useRef();

  function handleErrors(e) {
    console.log("socket error", e);
    toast.error("Socket connection failed, try again later.");
    Navigator("/");
  }
  useEffect(() => {
    const init = async () => {
      socketref.current = await initSocket();
      socketref.current.on("connect_error", (err) => handleErrors(err));
      socketref.current.on("connect_failed", (err) => handleErrors(err));

      socketref.current.emit(ACTIONS.JOIN, {
        username: Rtcontext.username,
        roomId,
      });
      socketref.current.on(ACTIONS.CODE_CHANGE, ({ username, code }) => {
        if (username === "zikkzk") {
          textref.current.value = code;
        } else {
          if (username !== Rtcontext.username) {
            textref.current.value = code;
            toast.success(`${username} is typing`);
          }
        }
      });
      socketref.current.on(ACTIONS.SYNC_CODE, ({ code }) => {
        textref.current.value = code;
      });
      socketref.current.on(
        ACTIONS.JOINED,
        ({ username, allclient, socketid }) => {
          if (username !== Rtcontext.username) {
            toast.success(`${username} joined the room`);
          }
          Rtcontext.setclient(allclient);
          socketref.current.emit(ACTIONS.SYNC_CODE, {
            socketid,
            code: textref.current.value,
          });
        }
      );
      socketref.current.on(ACTIONS.DISCONNECTED, ({ username, allclient }) => {
        toast.error(`${username} is disconnted`);
        Rtcontext.setclient(allclient);
      });
    };
    init();
  }, []);
  const updatetext = (e) => {
    socketref.current.emit(ACTIONS.CODE_CHANGE, {
      username: Rtcontext.username,
      code: textref.current.value,
      roomId,
    });
  };
  return (
    <div style={{ flex: "0.8" }}>
      <textarea
        ref={textref}
        onChange={(e) => updatetext(e)}
        placeholder="Enter your text here"
        style={{
          backgroundColor: "transparent",
          width: "97%",
          height: "97%",
          margin: "1%",
        }}
      ></textarea>
    </div>
  );
}

export default Section2;
