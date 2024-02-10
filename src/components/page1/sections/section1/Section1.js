import React, { useContext } from "react";
import "./Section1.css";
import Avtarcomponents from "../../../AvtarComponents/Avtarcomponents";
import Realtimecontext from "../../../../context/Realtimecontext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Section1({ roomId }) {
  const navigate = useNavigate();

  const Rtcontext = useContext(Realtimecontext);
  const copyRID = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID has been copied to your clipboard");
    } catch (err) {
      console.error(err);
      toast.error("Could not copy the Room ID");
    }
  };

  return (
    <div className="section1">
      <div className="s1d1">
        {Rtcontext.client.map((client) => {
          return <Avtarcomponents key={client._id} client={client} />;
        })}
      </div>

      <div className="s1d2">
        <button
          onClick={() => {
            toast.error("website is in working state");
          }}
        >
          PDF
        </button>
        <button onClick={copyRID}>Copy Code</button>
        <button
          onClick={() => {
            toast.error("website is in working state");
          }}
        >
          Leave
        </button>
      </div>
    </div>
  );
}

export default Section1;
