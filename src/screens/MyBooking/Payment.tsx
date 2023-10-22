import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Button from "../../components/Button";
import { InputDate, InputText } from "../../components/Input";
import UploadImage from "../../components/Input/UploadImage";
import Layout from "../../components/Layout";
import { myBookingPath } from "../../constants";
import { useMyBooking } from "../../hooks/useMyBooking";
import { IRootState } from "../../store/reducers";
import { colorDanger } from "../../styles/Global.style";
import { isNumber } from "../../utils/validator";

const Payment = ({ navigation }) => {
  /* Local State */
  const [evidence, setEvidence] = useState<string>("");

  /* Redux */
  const { waitingPaymentDetail } = useSelector(
    (state: IRootState) => state.myBooking
  );

  /* Hooks */
  const { isLoading, confirmPayment } = useMyBooking({ navigation });

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("ID required").default(waitingPaymentDetail?.id),
    fromBankAccountHolder: Yup.string().required(
      "Account holder name required"
    ),
    fromBankName: Yup.string().required("Bank name required"),
    transferDate: Yup.string().required("Transfer date required"),
    fromBankAccountNumber: Yup.string()
      .required("Account number required")
      .test("isAccountNumber", "Invalid account number", (value) => {
        return !isNumber(value) ? false : true;
      }),
    transferAmount: Yup.string()
      .required("Total fee required")
      .test("isFee", "Invalid total fee", (value) => {
        return !isNumber(value) ? false : true;
      }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (payload: any) =>
    confirmPayment({ ...payload, base64: evidence || "" });
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Transfer Bank Account"
        backHref={myBookingPath}
        navigation={navigation}
      >
        <Text style={{ fontSize: 12 }}>
          Selesaikan payment booking anda dengan melakukan transfer ke{" "}
          <Text style={{ fontWeight: "bold" }}>
            Bank MANDIRI 787642888888888
          </Text>{" "}
          a.n <Text style={{ fontWeight: "bold" }}>Lapangan Puri Indah.</Text>
        </Text>
        <Text style={{ fontSize: 12, marginTop: 20 }}>
          Lakukan pembayaran dan konfirmasi
        </Text>
        <Text
          style={{
            marginBottom: 17,
            color: colorDanger.default,
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          sebelum tanggal{" "}
          {moment(waitingPaymentDetail.expiry_date).format("DD-MM-YYYY HH:mm")}{" "}
          WIB
        </Text>
        <InputText
          control={control}
          name="fromBankAccountHolder"
          placeholder="Input account nama pengirim"
          label="Nama Pengirim"
          type="default"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.fromBankAccountHolder?.message?.toString()}
        />
        <InputText
          control={control}
          name="fromBankName"
          placeholder="Input nama bank pengirim"
          label="Nama Bank Pengirim"
          type="default"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.fromBankName?.message?.toString()}
        />
        <InputText
          control={control}
          name="fromBankAccountNumber"
          placeholder="Input nomor bank pengirim"
          label="Nomor Bank Pengirim"
          type="number-pad"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.fromBankAccountNumber?.message?.toString()}
        />
        <InputDate
          control={control}
          name="transferDate"
          label="Tanggal Pengiriman"
          placeholder="DD-MMM-YYYY"
          style={{ marginBottom: 13 }}
          mode="datetime"
          errorMessage={errors?.transferDate?.message?.toString()}
        />
        <InputText
          control={control}
          name="transferAmount"
          placeholder="Input jumlah pembayaran"
          label="Jumlah Pembayaran"
          type="number-pad"
          style={{ marginBottom: 26 }}
          errorMessage={errors?.transferAmount?.message?.toString()}
        />
        <UploadImage
          label="Upload Bukti Transfer"
          image={evidence}
          setImage={setEvidence}
        />
        <Button
          label="Send"
          btnType="button"
          onClick={handleSubmit(onSubmit)}
          type="primary"
          style={{ marginTop: 50 }}
          isDisable={!isValid || isSubmitting || !evidence}
          isSubmit={(isSubmitting && isValid) || isLoading}
        />
      </Layout>
    </React.Fragment>
  );
};

export default Payment;
