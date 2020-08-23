import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./ChannelRow.css";
function ChannelRow({
  image = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png",
  channel = "Channel Name",
  verified,
  subs = "100K",
  noOfVideos = "250",
  description = "This is channel description",
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs}.{noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
