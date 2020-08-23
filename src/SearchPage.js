import React from "react";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2> Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image={
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
        }
        channel="Channel Name"
        verified
        subs="100K"
        noOfVideos="250"
        description="This is channel description"
      />
      <hr />
      <VideoRow />
    </div>
  );
}
export default SearchPage;
