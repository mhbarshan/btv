// ChannelList.js
import React from "react";
import channels from "./Channels";

const ChannelList = ({ onPlay }) => {
  return (
    <div className="row">
      {channels.map((channel) => (
       <div className="col-sm-3">
       <div
          className="card"
          style={{minWidth:'115px',height:'130px',marginBottom: "10px"}}
          key={channel.id}
        >
          {/* <img
            className="card-img-top"
            src="https://i.ibb.co/LxYzq1V/Deepto-TV-logo.png"
            alt="Card imag cap"
          /> */}
          <div className="card-body">
            <h5 className="card-title">
              <span>{channel.name}</span>
            </h5>
            <button
              onClick={() => onPlay(channel.url)}
              className="btn btn-primary button"
            >
              Play
            </button>
          </div>
        </div>
        </div>
      ))}
    </div>

  );
};

export default ChannelList;
