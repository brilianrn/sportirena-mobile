import React from "react";
import { Text } from "react-native";
import Layout from "../../components/Layout";
import { colorGray } from "../../styles/Global.style";
import TncCardList from "./TncCardList";

const Tnc = ({ navigation }) => {
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Terms and Conditions"
        navigation={navigation}
      >
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Welcome to Sportirena, the online platform for easy and fast sports
          field booking. Before using our services, please read and carefully
          understand the following Terms and Conditions. By using our platform,
          you are deemed to have agreed to all the terms stated below:
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Service and Usage:
        </Text>
        <TncCardList
          data={[
            {
              key: "Sportirena provides online sports field booking services.",
            },
            {
              key: "You can use this platform as an individual or as an authorized representative of an organization.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Payment:
        </Text>
        <TncCardList
          data={[
            {
              key: "All payments must be made through the payment methods provided by Sportirena.",
            },
            {
              key: "Payments must be made before the scheduled time and date of the sports field booking.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Sports Field Availability:
        </Text>
        <TncCardList
          data={[
            {
              key: "Sports field availability may change without prior notice.",
            },
            {
              key: "If the sports field is unavailable due to unforeseen circumstances, Sportirena will attempt to provide an equivalent alternative solution if possible.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Sports Field Usage:
        </Text>
        <TncCardList
          data={[
            {
              key: "The field can only be used on the dates and times you have booked.",
            },
            {
              key: "Please ensure to arrive on time to maximize your usage of the sports field.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Payment and Additional Fees:
        </Text>
        <TncCardList
          data={[
            {
              key: "All sports field booking fees must be paid before using the field.",
            },
            {
              key: "Additional fees that may arise during field usage (such as additional lighting charges, equipment rentals, or other facility fees) will be your responsibility and must be paid as per applicable terms.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Appropriate Usage:
        </Text>
        <TncCardList
          data={[
            {
              key: "The sports field must be used for the designated sports or activities as specified during booking.",
            },
            {
              key: "You are responsible for complying with the rules and regulations applicable to the sports field you are using.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          User Responsibility:
        </Text>
        <TncCardList
          data={[
            {
              key: "You are responsible for the accuracy of the information provided during sports field booking.",
            },
            {
              key: "You must use the sports field with courtesy, follow the applicable rules, and adhere to the code of conduct.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Cancellation or Termination of Service:
        </Text>
        <TncCardList
          data={[
            {
              key: "Sportirena reserves the right to cancel or terminate services to users in case of any violations of our Terms and Conditions.",
            },
            {
              key: "Cancellation or termination may be done without prior notice.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Changes to Terms and Conditions:
        </Text>
        <TncCardList
          data={[
            {
              key: "Sportirena reserves the right to update or modify these Terms and Conditions from time to time.",
            },
            {
              key: "Changes will be effective after being notified through the Sportirena platform.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Limitation of Liability:
        </Text>
        <TncCardList
          data={[
            {
              key: "Sportirena is not liable for any loss, damage, or injury caused by the use of our services or utilization of sports fields.",
            },
            {
              key: "The use of this service is entirely at the user's own risk.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Data Privacy Usage:
        </Text>
        <TncCardList
          data={[
            {
              key: "Sportirena will collect and manage your personal data in accordance with our Privacy Policy.",
            },
            {
              key: "We are committed to maintaining the security and confidentiality of your personal information.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            fontWeight: "bold",
            marginVertical: 20,
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Applicable Law:
        </Text>
        <TncCardList
          data={[
            {
              key: "These Terms and Conditions are subject to the laws of the jurisdiction where Sportirena operates.",
            },
          ]}
        />
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            letterSpacing: 0.3,
            lineHeight: 20,
            marginVertical: 20,
          }}
        >
          By using the Sportirena sports field booking platform, you are deemed
          to have read, understood, and agreed to all the Terms and Conditions
          mentioned above.
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          If you do not agree with these terms, please discontinue using our
          platform. If you have any further questions, feel free to contact our
          support team. Thank you for using Sportirena's services.
        </Text>
      </Layout>
    </React.Fragment>
  );
};

export default Tnc;
