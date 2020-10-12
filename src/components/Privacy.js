import React, { useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './Privacy.module.css';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <Container text>
      <div class={styles['privacy-container']}>
        <div class={styles['privacy-header']}>
          <Header as='h1'>
            oak privacy policy
          </Header>
          <p><Link class={styles['white-link']} to="/">back to the homepage</Link></p>
        </div>

        <p>
           Oak Systems, a Massachusetts Sole Proprietorship, doing business as oak ["we", "our"] is committed to protecting your privacy. This privacy policy explains how your personal information is collected, used, and with whom it may be shared. This policy applies solely to information collected by myoaksystem.com and our consultation [this "Website"]. By accessing or using this Website, you signify that you have read, understood, and consent to the collection, usage, and storage of your personal information as described in this Privacy Policy.
        </p>

        <Header as='h2'>
           Information Collection, Use, and Sharing
        </Header>

        <p>
           We are the sole owners of the information collected on this site. We will use the information types listed below to operate, maintain, and improve the features and functionality of this Website and to communicate with you directly:
        </p>

        <ul>
          <li>
             <strong>Personal information that you provide to us directly.</strong> We may collect personal information including your first and last name, email address, age, and location when you complete our consultation, feedback surveys, or register as a user on this Website. We may also collect any communication between you and Oak Systems. This information will be used for the operation and maintenance of this Website and our consultation, to provide our personalization service, and for communication between you and Oak Systems. We may share this information with third-party vendors that perform services on our behalf as needed to carry out their work for us. These parties are not allowed to use personally identifiable information except for the purpose of providing these services. We may also share this information with the public when you provide feedback. For example, your first name and last initial and comments may be displayed on our Website and social media. Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy
          </li>
          <li>
             <strong>Non-personal information that you provide to us through the use of our consultation.</strong> Our consultation collects non-personal information regarding your hair, hair routine, and factors that might influence your hair health including your hair type, texture, length, porosity, pH balance, hair regimen, age, and zip code. This information is used to provide you with tailored recommendations and to help improve the functionality and features of our consultation. We may use this information to create aggregate metrics including but not limited to the percentage of users with different hair types, textures, hair lengths, and porosities. Aggregate metrics may be shared with and sold to other businesses, but individual information will not be shared or sold.
          </li>
          <li>
             <strong>Information provided to use through tracking technologies.</strong> We and third-party partners collect usage information when you access this Website, read our emails, and engage with Oak Systems. We may collect this information and analytics data or use third-party analytics tools including, but not limited to, Google Analytics and Tilda Publishing, to help us measure traffic and usage trends of this Website. We may use the information collected to monitor the effectiveness of this Website, monitor aggregate metrics such as the total number of users, traffic, usage patterns, and demographics. We may also use this information for advertising purposes.
          </li>
        </ul>

         This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.

         <Header as='h2'>
          How we protect your privacy
         </Header>

         <Header as='h2'>
           Information security:
         </Header>

         <p>
            We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page. While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
         </p>
         <p>
          How long do we retain your personal information?
         </p>
         <p>
          We will only collect information that is necessary to provide the services as outlined in this policy and retain the information only for as long as necessary to provide the services as outlined in this policy. The length of time that personal information is retained is determined by the nature of the personal information and the purpose that it serves. Personal information (first name, last name, email address) and non-personal hair information (hair type, texture, length, porosity, pH balance, hair regimen, age, and zip code) related to your account is retained for as long as you have your account. Other data collected in regards to your activity on our website is maintained for a short period of time before being anonymized and aggregated.
         </p>

         <Header as='h2'>
           Privacy of children
         </Header>

         <p>
            Oak Systems does not knowingly collect information of children without the consent of parents and guardians. In the event that we learn we have collected personal information from a child under the age of 13, we will immediately delete that information. If you believe we have collected the information of the child under the age of 13, please email us at <a href="mailto:info@myoaksystem.com">info@myoaksystem.com</a>.
         </p>

         <Header as='h2'>
           Mandatory disclosure
         </Header>

         <p>
            We may be obligated by mandatory law to disclose your personal data to certain authorities or other third parties, for example, to law enforcement agencies in the countries where we or third parties acting on our behalf operate. We may also disclose and otherwise process your personal data in accordance with applicable law to defend Oak System's legitimate interests, for example, in legal proceedings or in connection with governmental requests and filings. We process your information as necessary to comply with laws and regulations.
         </p>

         <Header as='h2'>
           Your rights regarding your personal information
         </Header>

         <p>
          You have the right to do the following at any time by contacting us via <a href="mailto:info@myoaksystem.com">info@myoaksystem.com</a>:
         </p>

         <ul>
          <li>
            Know, access, and see what data we have about you.
          </li>
          <li>
            Request that any personal or non-personal data that we have about you be deleted.
          </li>
          <li>
            To restrict processing of data in circumstances where you think the data may be inaccurate or the processing unlawful
          </li>
          <ul>
            <li>
              Once you revoke consent to process your information, we will not further process your information. However, it will not impact the lawfulness of the processing of your information before consent has been withdrawn.
            </li>
          </ul>
          <li>
            To unsubscribe from any marketing material and request that we stop processing your data for direct marketing purposes
          </li>
          <li>
            Express any concern you have about our use of your data.
          </li>
         </ul>

         <p> If you feel that we are not abiding by this policy, you should contact us immediately via email at <a href="mailto:info@myoaksystem.com">info@myoaksystem.com</a>.</p>

         <Header as='h2'>
           Changes to this policy
         </Header>

         <p>
            Oak Systems may from time to time change this policy or change, modify or withdraw access to this site at any time with or without notice. However, if this policy is changed in a material, adverse way, Oak Systems will post a notice advising of such change at the beginning of this policy and on this site's home page for 30 days. We recommend that you revisit this policy from time to time to learn of any such changes to this policy.
         </p>
      </div>
    </Container>
  )
}
