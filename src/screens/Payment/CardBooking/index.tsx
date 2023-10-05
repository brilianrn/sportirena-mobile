import moment from "moment";
import React, { FC } from "react";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import { IconTrashRed } from "../../../assets/images";
import Image from "../../../components/Image";
import { InputCheckbox } from "../../../components/Input";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import { CardBookingProps } from "../Payment.type";

const CardBooking: FC<CardBookingProps> = ({
  item,
  setChooseBooking,
  courtDetail,
  onDetaleBooking,
}) => {
  return (
    <React.Fragment>
      <View
        key={item.id}
        style={[
          {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colorGray[300],
            marginTop: 10,
            padding: 18,
          },
        ]}
      >
        <View style={[Global.justifyBetween]}>
          <View style={[Global.justifyStart, { gap: 13 }]}>
            <InputCheckbox
              checked={item.isChecked}
              setChecked={setChooseBooking}
            />
            <Image
              useBaseUrl
              src={`${courtDetail?.pathName}/${courtDetail?.imageName}`}
              width={70}
              height={90}
              style={{ borderRadius: 8 }}
            />
            <View>
              <Text
                style={{
                  fontSize: 10,
                  color: colorPrimary.default,
                  fontWeight: "600",
                }}
              >
                {courtDetail?.courtName}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  marginVertical: 3,
                }}
              >
                {moment(item.date).format("DD MMMM yyyy")}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                }}
              >
                {item.startTime} - {item.endTime}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onDetaleBooking}>
            <ImageRN source={IconTrashRed} />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default CardBooking;
