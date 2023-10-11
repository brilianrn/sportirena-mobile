import React, { FC, useState } from "react";
import { Image as ImageRN, TouchableOpacity } from "react-native";
import { IconCameraWhite } from "../../../assets/images";
import { colorGray } from "../../../styles/Global.style";
import Image from "../../Image";
// import * as ImagePicker from "react-native-image-picker";

const ImagePicker = require("react-native-image-picker");

const UploadImage: FC<{
  image?: string;
}> = ({ image }) => {
  /* Local State */
  // const [photo, setPhoto] = useState<ImagePicker.ImagePickerResponse>();

  const handleChoosePhoto = async () => {
    try {
      console.log("MASOK sini");
      const img = await ImagePicker.launchImageLibrary({ mediaType: "photo" });
      console.log(img);
      // await ImagePicker.launchImageLibrary(
      //   {
      //     mediaType: "mixed",
      //   },
      //   (response) => {
      //     console.log(response);
      //     // this.setState({
      //     //   resourcePath: response
      //     // });
      //   }
      // );
    } catch (error) {
      console.log(error);
    }
    // await launchImageLibrary({ mediaType: "photo" }, (response) => {
    //   console.log(response);
    //   if (response) {
    //     setPhoto(response);
    //   }
    // });
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
          <Image
            useBaseUrl
            src={image as string}
            style={{ height: "100%", width: "100%", borderRadius: 50 }}
          />
        )}
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default UploadImage;
