import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import { loginPath } from "../../constants";
import { Global } from "../../styles/Global.style";
import {
  removeLocalStorageItem,
  retrieveLocalStorageItem,
} from "../../utils/localStorage";
import { UserDetailType } from "../../types/common.type";

const Profile = () => {
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
        navigate(loginPath as never);
      }
    })();
  }, [retrieveLocalStorageItem]);

  const logout = async () => {
    await Promise.all([
      removeLocalStorageItem("accessToken"),
      removeLocalStorageItem("userInfo"),
    ]);
    setUserDetail(undefined);
    navigate(loginPath as never);
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
            },
          ]}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            style={{ height: 100, width: 100 }}
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
              onClick={console.log}
              type="outline-primary"
              size="sm"
            />
          </View>
        </View>
        <Button
          label="Logout"
          btnType="button"
          type="primary"
          style={{ marginTop: 47 }}
          onClick={logout}
        />
      </Layout>
    </React.Fragment>
  );
};

export default Profile;
