import * as ImagePicker from "expo-image-picker";
import React, { FC, useState } from "react";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import { IconCameraWhite } from "../../../assets/images";
import { Global, colorGray } from "../../../styles/Global.style";
import Button from "../../Button";

const UploadImage: FC<{
  image: string;
  setImage: (value: string) => void;
  label?: string;
}> = ({ image, setImage, label }) => {
  /* Local State */
  const [filename, setFilename] = useState<string>();

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
      setFilename(result.assets?.[0].uri.split("/ImagePicker/")[1] as string);
    }
  };
  return (
    <React.Fragment>
      {!label ? (
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
      ) : (
        <View style={[Global.justifyStart, { gap: 15 }]}>
          <Button
            label={label}
            btnType="button"
            type="primary"
            onClick={handleChoosePhoto}
            size="sm"
          />
          <Text
            style={{
              ...Global.truncate,
              fontSize: 10,
              color: colorGray[600],
              width: "45%",
            }}
          >
            {filename}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

export default UploadImage;
