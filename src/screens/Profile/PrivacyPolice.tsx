import React from "react";
import { Text } from "react-native";
import Layout from "../../components/Layout";
import { colorGray } from "../../styles/Global.style";
import TncCardList from "./TncCardList";

const PrivacyPolice = () => {
  return (
    <React.Fragment>
      <Layout useTopBar isSearchBar={false} label="Privacy Police">
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          Sportirena is committed to protecting your privacy by safeguarding the
          personal information you provide when using our services. This Privacy
          and Usage Policy outlines how we collect, use, store, and protect your
          personal data. By using our platform, you agree to comply with this
          policy. Please note that Sportirena may update this policy from time
          to time, and any changes will be communicated to you via email or
          notifications on our platform.
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
          Information We Collect:
        </Text>
        <TncCardList
          data={[
            {
              key: "Personal Information: Sportirena may collect personal information such as your full name, email address, phone number, address, and payment details when you sign up or use our services.",
            },
            {
              key: "Automatic Information: When you access our platform, technical information such as IP address, device type, browser type, language, and access time may be automatically collected by Sportirena's system.",
            },
            {
              key: "Third-Party Information: Sportirena may receive information from third parties, such as business partners, to help us improve our services and tailor them to your needs.",
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
          Use of Information:
        </Text>
        <TncCardList
          data={[
            {
              key: "Customer Service: Sportirena uses your personal information to provide customer service, such as booking confirmation, updates, and account-related notifications.",
            },
            {
              key: "Payment Processing: Your payment information is used by Sportirena to process transactions and payments for sports field bookings made through our platform.",
            },
            {
              key: "Service Enhancement: Sportirena may use anonymized data for analysis and service enhancement to better meet the needs and preferences of our users.",
            },
            {
              key: "Marketing Communication: With your consent, Sportirena may send information about products, offers, and promotions via email or other notifications. You can opt-out of marketing communication at any time.",
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
          Information Security:
        </Text>
        <TncCardList
          data={[
            {
              key: "Data Security: Sportirena takes appropriate security measures to protect your personal data from unauthorized access, use, or disclosure.",
            },
            {
              key: "Access Limitation: Access to personal information is restricted to Sportirena's staff who need such information to perform customer service or platform improvement tasks.",
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
          Information Storage:
        </Text>
        <TncCardList
          data={[
            {
              key: "Retention Period: Sportirena will store your personal information for as long as necessary for the purposes described in this policy, unless there are legal requirements to retain it for a longer period.",
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
          Third Parties:
        </Text>
        <TncCardList
          data={[
            {
              key: "Business Partners: Sportirena may share information with our business partners for service improvement or marketing purposes with your consent.",
            },
            {
              key: "Legal Requirements: Sportirena may disclose personal information when required by law, court order, or if we believe such action is necessary to comply with laws or protect our rights, safety, or property.",
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
          Your Privacy Rights:
        </Text>
        <TncCardList
          data={[
            {
              key: "Access and Correction: You can access or correct your personal information by contacting Sportirena via the email provided on our platform.",
            },
            {
              key: "Account Deletion: If you wish to delete your account from our platform, you can do so by contacting our Sportirena customer service.",
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
          Contact Us:
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            letterSpacing: 0.3,
            lineHeight: 20,
            marginVertical: 20,
          }}
        >
          If you have any questions, complaints, or further inquiries regarding
          this Privacy and Usage Policy or about Sportirena, please contact us
          through the email address provided on our platform.
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colorGray[500],
            letterSpacing: 0.3,
            lineHeight: 20,
          }}
        >
          This Privacy and Usage Policy is intended to help you understand how
          Sportirena collects, uses, and protects your personal information when
          using our platform. By using our services, you agree to the practices
          described in this policy. Thank you for using Sportirena - Sports
          Field Booking Platform!
        </Text>
      </Layout>
    </React.Fragment>
  );
};

export default PrivacyPolice;
