import React, { FC, useEffect, useState } from "react";
import { Image as ImageRN } from "react-native";
import { BASE_URL_PREVIEW_IMG } from "../../constants/host";
import { ImageProps } from "./Image.type";

const Image: FC<ImageProps> = ({ src, height, style, width, useBaseUrl }) => {
  const [uri, setUri] = useState<string>(src);

  useEffect(() => {
    if (src && useBaseUrl) {
      setUri(`${BASE_URL_PREVIEW_IMG}/${src}/`);
    } else {
      setUri(src);
    }
  }, [src, useBaseUrl]);

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
