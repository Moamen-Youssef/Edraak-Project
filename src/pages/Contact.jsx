import { FaPhone } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

function Contact() {
  const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    direction: ltr;
  `;
  const Title = styled.h1`
    color: var(--color-brand-100);
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
  `;
  const Contacts = styled.div`
    display: flex;
  `;
  const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 2rem;
    & svg {
      color: var(--color-brand-100);
      width: 4rem;
      height: 4rem;
    }
    & p {
      text-align: center;
      font-weight: 500;
      @media (min-width: 600px) {
        width: 120%;
      }
    }
  `;
  const Footer = styled.footer`
  font-size: small;
  font-weight: 500;
  margin-top: 20px;
    color: var(--color-grey-400);
  `
  return (
    <ContactContainer>
      <Title>تواصل معنا</Title>
      <Contacts className='sm:text-[1.3rem] flex-col text-2xl sm:flex-row gap-0 sm:gap-[40px]'>
        <ContactBox>
          <MdEmail />
          <p>info@gmail.com</p>
        </ContactBox>
        <ContactBox>
          <GrMapLocation />
          <p>طريق الملك عبداالله - حي 2978 الورود 8124 - الرياض </p>
        </ContactBox>
        <ContactBox>
          <FaPhone />
          <p>(+996) 265428175752</p>
        </ContactBox>
      </Contacts>
      <Footer>جميع الحقوق محفوظة لصالح إدارك الرقمية لتقنية المعلومات </Footer>
    </ContactContainer>
  );
}

export default Contact;
