import React, { useState, useContext } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import Realtimecontext from "../../context/Realtimecontext";

function Form() {
  const Rtcontext = useContext(Realtimecontext);

  const [roomId, setroomId] = useState("");
  const navigate = useNavigate();
  const handleonjoin = (event) => {
    event.preventDefault();
    if (!Rtcontext.username || !roomId) {
      toast.error("uesrname or roomid is never be");
      return;
    }
    console.log(Rtcontext.username);
    navigate(`/join/${roomId}`, {
      username: Rtcontext.username,
      roomId,
    });
  };
  const handlenewroom = () => {
    setroomId(uuidv4());
  };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>username</label>
        <input
          type="text"
          value={Rtcontext.username}
          className="homeinputfield"
          onChange={(event) => {
            Rtcontext.setusername(event.target.value);
          }}
        />
        <label>Room Code</label>
        <input
          type="text"
          value={roomId}
          className="homeinputfield"
          onChange={(event) => {
            setroomId(event.target.value);
          }}
        />

        <button
          onClick={(event) => {
            handleonjoin(event);
          }}
        >
          Join
        </button>
        <p>
          Don't have a room? Create{"  "}
          <span className="newroombtn" onClick={handlenewroom}>
            New Room
          </span>
        </p>
      </form>
    </div>
  );
}

export default Form;
