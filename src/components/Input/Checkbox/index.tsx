import { View, Text } from "react-native";
import React, { FC } from "react";
import { CheckboxProps } from "./Checkbox.type";
import Checkbox from "react-native-check-box";
import { Global, colorGray } from "../../../styles/Global.style";
import CheckboxStyle from "./Checkbox.style";

const InputChecbox: FC<CheckboxProps> = ({
  checked,
  setChecked,
  disabled = false,
  label,
  style,
}) => {
  return (
    <View style={[Global.justifyStart, style]}>
      <Checkbox
        onClick={() => setChecked && setChecked(!checked)}
        isChecked={checked as boolean}
        checkBoxColor="gray"
        checkedCheckBoxColor={colorGray[600]}
        disabled={disabled}
      />
      {label && <Text style={CheckboxStyle.labelCheckbox}>{label}</Text>}
    </View>
  );
};

export default InputChecbox;
