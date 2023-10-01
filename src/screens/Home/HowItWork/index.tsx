import React from "react";
import { Image, Text, View } from "react-native";
import {
  IconAtmCardActive,
  IconBasketFieldActive,
  IconCalendarTimeActive,
  IconManRunActive,
} from "../../../assets/images";
import { Global } from "../../../styles/Global.style";
import HomeStyle from "../Home.style";

const HowItWork = () => {
  return (
    <React.Fragment>
      <Text style={[HomeStyle.titleHome, { marginTop: 30 }]}>
        Bagaimana caranya?
      </Text>
      <View
        style={[
          HomeStyle.howItWorkCard,
          Global.justifyStart,
          { gap: 16, flex: 1 },
        ]}
      >
        <Image source={IconBasketFieldActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Cari tempat olahraga dan lapangan yang tepat untuk aktivitas olahraga
          Anda.
        </Text>
      </View>
      <View
        style={[
          HomeStyle.howItWorkCard,
          Global.justifyStart,
          { gap: 16, flex: 1 },
        ]}
      >
        <Image source={IconCalendarTimeActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Pilih tanggal dan waktu yang sesuai dengan jadwal olahraga Anda, lalu
          pesan.
        </Text>
      </View>
      <View
        style={[
          HomeStyle.howItWorkCard,
          Global.justifyStart,
          { gap: 16, flex: 1 },
        ]}
      >
        <Image source={IconAtmCardActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Bayar pemesanan Anda hanya dengan satu klik saja melalui perangkat
          yang Anda miliki.
        </Text>
      </View>
      <View
        style={[
          HomeStyle.howItWorkCard,
          Global.justifyStart,
          { gap: 16, flex: 1 },
        ]}
      >
        <Image source={IconManRunActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Datang dan nikmatilah perjalanan olahraga yang luar biasa bersama
          kami!
        </Text>
      </View>
    </React.Fragment>
  );
};

export default HowItWork;
