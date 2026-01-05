import React from "react";
import "./cardskeleton.css";
import Skeleton from "./Skeleton";

const CardSkeleton = ({ style, avatarSize = 80 }) => {
  return (
    <div className="card-skeleton-wrapper" style={style}>
      <div className="card">
        <div className="profile-section">
          <Skeleton
            width={`${avatarSize}px`}
            height={`${avatarSize}px`}
            borderRadius="50%"
          />
          <div className="profile-text">
            <Skeleton width="120px" height="14px" />
            <Skeleton width="80px" height="12px" />
          </div>
        </div>

        <div className="content-section">
          <Skeleton width="100%" height="120px" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
