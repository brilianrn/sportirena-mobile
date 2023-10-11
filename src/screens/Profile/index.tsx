import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import {
  IconProfileChangePassword,
  IconProfilePrivacy,
  IconProfileTnc,
} from "../../assets/images";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import {
  loginPath,
  privacyPoliceProfilePath,
  tncPath,
  updatePasswordPath,
  updateProfilePath,
} from "../../constants";
import { Global, colorPrimary } from "../../styles/Global.style";
import { UserDetailType } from "../../types/common.type";
import {
  removeLocalStorageItem,
  retrieveLocalStorageItem,
} from "../../utils/localStorage";

const Profile = ({ navigation }) => {
  /* Local State */
  const [userDetail, setUserDetail] = useState<UserDetailType>();

  /* Router */
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const [token, user] = await Promise.all([
        retrieveLocalStorageItem("accessToken"),
        retrieveLocalStorageItem("userInfo"),
      ]);
      setUserDetail(user ? JSON.parse(user as string) : undefined);
      if (!token || !user) {
        navigation.replace(loginPath);
      }
    })();
  }, [retrieveLocalStorageItem]);

  const logout = async () => {
    await Promise.all([
      removeLocalStorageItem("accessToken"),
      removeLocalStorageItem("userInfo"),
    ]);
    setUserDetail(undefined);
    navigation.replace(loginPath);
  };
  return (
    <React.Fragment>
      <Layout isSearchBar={false} useBottomBar>
        <View
          style={[
            Global.justifyStart,
            {
              borderRadius: 8,
              backgroundColor: "#EEF3F1",
              width: "100%",
              padding: 34,
              gap: 28,
              alignItems: "center",
              marginBottom: 40,
            },
          ]}
        >
          <Image
            useBaseUrl
            src={`${userDetail?.pathName}/${userDetail?.imageName}`}
            style={{ height: 100, width: 100, borderRadius: 100 / 2 }}
          />
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {userDetail?.name}
            </Text>
            <Text style={{ fontSize: 12, marginVertical: 7 }}>
              {userDetail?.phoneNumber}
            </Text>
            <Button
              label="Edit Profile"
              btnType="button"
              onClick={() => navigate(updateProfilePath as never)}
              type="outline-primary"
              size="sm"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate(updatePasswordPath as never)}
          style={[Global.justifyStart, { gap: 19, marginBottom: 40 }]}
        >
          <ImageRN source={IconProfileChangePassword} />
          <Text
            style={{
              fontSize: 14,
              color: colorPrimary.default,
              fontWeight: "500",
              marginTop: 3,
            }}
          >
            Ubah Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate(tncPath as never)}
          style={[Global.justifyStart, { gap: 19, marginBottom: 40 }]}
        >
          <ImageRN source={IconProfileTnc} />
          <Text
            style={{
              fontSize: 14,
              color: colorPrimary.default,
              fontWeight: "500",
              marginTop: 3,
            }}
          >
            Terms and Conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate(privacyPoliceProfilePath as never)}
          style={[Global.justifyStart, { gap: 19, marginBottom: 40 }]}
        >
          <ImageRN source={IconProfilePrivacy} />
          <Text
            style={{
              fontSize: 14,
              color: colorPrimary.default,
              fontWeight: "500",
              marginTop: 3,
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <Button
          label="Logout"
          btnType="button"
          type="primary"
          onClick={logout}
        />
      </Layout>
    </React.Fragment>
  );
};

export default Profile;
