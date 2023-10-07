import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import { iconTypeFormatter } from "../../../utils/formattor";
import HomeStyle from "../Home.style";
import { FacilityTypeProps } from "../Home.type";
import CardFacilityType from "./Card";

const FacilityType: FC<FacilityTypeProps> = ({
  data,
  useTitle = true,
  iconHeight,
  iconWidth,
}) => {
  return (
    <React.Fragment>
      {data?.length ? (
        <>
          {useTitle && (
            <Text style={[HomeStyle.titleHome, { marginBottom: 15 }]}>
              Facility Type
            </Text>
          )}
          <ScrollView horizontal>
            {data.map((e) => (
              <CardFacilityType
                title={e.typeName}
                icon={iconTypeFormatter(e.typeName || e.facilityTypeName)}
                iconHeight={iconHeight}
                iconWidth={iconWidth}
                key={e.id}
              />
            ))}
          </ScrollView>
        </>
      ) : null}
    </React.Fragment>
  );
};

export default FacilityType;
