import React, { FC, useState } from "react";
import { Image as ImageRN } from "react-native";
import { ImageProps } from "./Image.type";

const Image: FC<ImageProps> = ({ src, height, style, width }) => {
  const [uri, setUri] = useState<string>(src);

  const onError = () => {
    setUri(
      "https://play-lh.googleusercontent.com/_BpDcmn3akx-KS6a43rRFGRCJzZrZS8rwAtkyZgawPUECy9Z6iAmx3RdmHQZ8G0C_xoE"
    );
  };
  return (
    <ImageRN source={{ uri, height, width }} style={style} onError={onError} />
  );
};

export default Image;
