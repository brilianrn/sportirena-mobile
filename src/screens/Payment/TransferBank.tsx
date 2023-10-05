import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Button from "../../components/Button";
import { InputSelect, InputText } from "../../components/Input";
import Layout from "../../components/Layout";
import { paymentPath } from "../../constants";
import { BankTransferType } from "../../core/POST_CreateBooking";
import { useBooking } from "../../hooks/useBooking";
import { IRootState } from "../../store/reducers";
import { isNumber } from "../../utils/validator";
import { BankType } from "../Booking/Booking.type";

const TransferBank = () => {
  /* Local State */
  const [bankChoosen, setBankChoosen] = useState<BankType>();
  /* Redux */
  const { paymentBookingHour, bankNames } = useSelector(
    (state: IRootState) => state.booking
  );

  /* Hooks */
  const { fetchBankNames, createBooking, isLoading } = useBooking();

  const validationSchema = Yup.object().shape({
    toBankName: Yup.string().required("Bank name required"),
    toBankAccountHolder: Yup.string().required("Account holder name required"),
    toBankAccountNumber: Yup.string()
      .required("Account number required")
      .test("isAccountNumber", "Invalid account number", (value) => {
        return !isNumber(value) ? false : true;
      }),
  });

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    fetchBankNames(paymentBookingHour[0].venueId as string);
  }, [paymentBookingHour]);

  const onBankChoosen = (toBank: string) => {
    if (toBank) {
      const bank: BankType = bankNames.filter(
        (e: BankType) => e.bankAccountNumber === toBank
      )[0];
      setBankChoosen(bank);
      setValue("toBankAccountHolder", bank.bankAccountHolder, {
        shouldValidate: true,
      });
      setValue("toBankAccountNumber", bank.bankAccountNumber, {
        shouldValidate: true,
      });
      setValue("toBankName", bank.bankName, {
        shouldValidate: true,
      });
    }
  };

  const onSubmit = (payload: BankTransferType) => {
    createBooking({ ...payload, data: paymentBookingHour });
  };
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
          setValue={onBankChoosen}
          value={bankChoosen?.bankAccountNumber}
          placeholder="Please select one"
          obtOptions={
            bankNames?.length
              ? bankNames.map((e: BankType) => ({
                  ...e,
                  key: e.bankAccountNumber,
                  value: e.bankName,
                }))
              : []
          }
          label="Bank Name"
          style={{ marginBottom: 13 }}
        />
        <InputText
          control={control}
          name="toBankAccountHolder"
          placeholder="Input account holder name"
          label="Account Holder Name"
          type="default"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.toBankAccountHolder?.message?.toString()}
        />
        <InputText
          control={control}
          name="toBankAccountNumber"
          placeholder="Input account number"
          label="Account Number"
          type="number-pad"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.toBankAccountNumber?.message?.toString()}
        />
        {/* <Text
          style={{
            marginTop: 10,
            marginBottom: 14,
            color: colorDanger.default,
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          Bayar sebelum 28 Agustus 2023 14:05 WIB
        </Text> */}
        <Button
          label="Send"
          onClick={handleSubmit(onSubmit)}
          type="primary"
          btnType="submit"
          isDisable={!isValid || isSubmitting}
          isSubmit={(isSubmitting && isValid) || isLoading}
        />
      </Layout>
    </React.Fragment>
  );
};

export default TransferBank;
