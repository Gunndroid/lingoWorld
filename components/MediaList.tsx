import React from "react";

type MediaListProps = {
  media: any[]; // refine the type further if you know the exact structure
};

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  return <div>MediaList</div>;
};

export default MediaList;
