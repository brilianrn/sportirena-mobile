import * as ImagePicker from "expo-image-picker";
import React, { FC } from "react";
import { Image as ImageRN, TouchableOpacity } from "react-native";
import { IconCameraWhite } from "../../../assets/images";
import { colorGray } from "../../../styles/Global.style";

const UploadImage: FC<{
  image: string;
  setImage: (value: string) => void;
}> = ({ image, setImage }) => {
  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.canceled) {
      setImage(`data:image/jpeg;base64,${result.assets[0]?.base64}`);
    }
  };
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={handleChoosePhoto}
        style={{
          position: "relative",
          height: 100,
          width: 100,
          borderRadius: 100 / 2,
          padding: 0,
          backgroundColor: colorGray[300],
        }}
      >
        <ImageRN
          source={IconCameraWhite}
          style={{
            position: "absolute",
            top: "35%",
            right: "35%",
            zIndex: 1,
            opacity: 0.7,
          }}
        />
        {image && (
          <ImageRN
            source={{ uri: image }}
            style={{ height: "100%", width: "100%", borderRadius: 50 }}
          />
        )}
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default UploadImage;
