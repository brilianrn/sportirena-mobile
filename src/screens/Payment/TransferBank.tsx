import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputSelect, InputText } from "../../components/Input";
import Layout from "../../components/Layout";
import { paymentPath } from "../../constants";
import { isNumber } from "../../utils/validator";
import { Text } from "react-native";
import { colorDanger } from "../../styles/Global.style";
import Button from "../../components/Button";

const TransferBank = () => {
  const validationSchema = Yup.object().shape({
    bankName: Yup.string().required("Bank name required"),
    accountHolderName: Yup.string().required("Account holder name required"),
    accountNumber: Yup.string()
      .required("Account number required")
      .test("isAccountNumber", "Invalid account number", (value) => {
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
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Transfer Bank Account"
        backHref={paymentPath}
      >
        <InputSelect
          isOptObj
          control={control}
          name="bankName"
          placeholder="Please select one"
          obtOptions={[
            {
              key: "bank",
              value: "BCAA",
            },
            {
              key: "bank2",
              value: "BCAA",
            },
            {
              key: "bank3",
              value: "BCAA",
            },
            {
              key: "bank4",
              value: "BCAA",
            },
          ]}
          label="Bank Name"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.bankName?.message?.toString()}
        />
        <InputText
          control={control}
          name="accountHolderName"
          placeholder="Input account holder name"
          label="Account Holder Name"
          type="default"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.accountHolderName?.message?.toString()}
        />
        <InputText
          control={control}
          name="accountNumber"
          placeholder="Input account number"
          label="Account Number"
          type="number-pad"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.accountNumber?.message?.toString()}
        />
        <Text
          style={{
            marginTop: 10,
            marginBottom: 14,
            color: colorDanger.default,
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          Bayar sebelum 28 Agustus 2023 14:05 WIB
        </Text>
        <Button
          label="Send"
          onClick={console.log}
          type="primary"
          btnType="submit"
          isDisable={!isValid || isSubmitting}
          isSubmit={isSubmitting && isValid}
        />
      </Layout>
    </React.Fragment>
  );
};

export default TransferBank;
