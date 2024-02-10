import React from "react";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Avtarcomponents = ({ client }) => {
  return (
    <div>
      <>
        <div>
          <AccountCircleTwoToneIcon
            style={{
              fontSize: "64px",
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "5px",
            }}
          />
          <div style={{ marginTop: "2%" }}>
            <span style={{ fontWeight: "bold" }}>{client.username}</span>
            <br />
            <span>online</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Avtarcomponents;
