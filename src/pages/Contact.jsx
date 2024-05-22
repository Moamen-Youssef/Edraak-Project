/* eslint-disable react/prop-types */
import { FaPhone } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import styled, { css } from 'styled-components';
import Input from '../ui/Input';
import FormRow from '../ui/FormRow';
import { useForm } from 'react-hook-form';
import { sendEmail } from './services/apiEmail';
import Map from '../components/Map';
import { appContent } from '../content/appContent';
import { useContext } from 'react';
import { LanguageContextAPI } from '../contexts/LanguageContext';

function Contact() {
  const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    direction: rtl;
    height: 100%;
  `;
  const Title = styled.h1`
    color: var(--color-brand-100);
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
  `;
  const Contacts = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    height: auto;
    ${props => props.lang === "en" && css`
    direction: ltr;
  `}
  `;
  const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px) {
      gap: 15px;
      padding: 2rem;
    }

    width: 100%;
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
    text-align: center;
    font-weight: 500;
    margin-top: 20px;
    color: var(--color-grey-400);
  `;
  const MessageUs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${props => props.lang === "en" && css`
    direction: ltr;
  `}
    gap: 8px;
    & h2 {
      font-weight: 600;
      color: var(--color-brand-100);
      background-color: var(--color-grey-50);
      padding: 0.5rem 1rem;
      border-radius: 9px;
    }
  `;
  const TextArea = styled.textarea`
    border-radius: 8px;
    padding: 0.5rem;
    min-width: 18rem;
    max-width: 18rem;
  `;
  const StyledForm = styled.form`
    border: solid 1px var(--color-grey-300);
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;
  `;
  const Button = styled.button`
    border: solid 1px var(--cloor-grey-200);
    border-radius: 5px;
    background-color: var(--color-white);
    color: var(--color-brand-100);
    padding: 0.1rem 1.5rem;
    width: 60%;
    &:hover {
      background-color: var(--color-grey-200);
    }
  `;
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isSubmitting } = formState;
  const {appLang} = useContext(LanguageContextAPI);
  const {ContactSectionContent} = appContent();
  const {title, address, email, rights} = ContactSectionContent;
  function handleAction() {
    reset();
  }
  function onSubmit(data) {
    sendEmail({ data, action: handleAction });
  }
  return (
    <ContactContainer>
      <Title>{title[appLang]}</Title>

      <Contacts lang={appLang} className='sm:text-[1.3rem] flex-col sm:flex-row   text-2xl  gap-0 sm:gap-[40px]'>
        <ContactBox>
          <MdEmail />
          <p>info@gmail.com</p>
        </ContactBox>
        <ContactBox>
          <GrMapLocation />
          <p>{address[appLang]}</p>
        </ContactBox>
        <ContactBox>
          <FaPhone />
          <p>(+996) 265428175752</p>
        </ContactBox>
      </Contacts>
      <Map />
      <MessageUs lang={appLang} className='items-center sm:items-start mt-32 sm:mt-0'>
        <h2>{email.title[appLang]}</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormRow label={email.labels.name[appLang]} error={errors?.clientName?.message}>
            <Input
              type='text'
              name='clientName'
              id='clientName'
              {...register('clientName', {
                required: 'من فضلك قم بتأكيد الاسم',
                validate: (value) =>
                  value.length > 2 || 'أقل عدد أحرف مقبولة 3 أحرف',
              })}
            />
          </FormRow>
          <FormRow
            label={email.labels.mail[appLang]}
            error={errors?.clientEmail?.message}
          >
            <Input
              type='email'
              name='clientEmail'
              id='clientEmail'
              {...register('clientEmail', {
                required: 'من فضلك قم بتأكيد البريد الالكتروني',
              })}
            />
          </FormRow>
          <FormRow
           label={email.labels.message[appLang]}
            type='text-area'
            error={errors?.message?.message}
          >
            <TextArea
              id='message'
              name='message'
              cols={24}
              rows={3}
              {...register('message', {
                required: 'من فضلك اترك رسالتك قبل تأكيد الارسال',
                validate: (value) =>
                  value.length > 10 || 'أقل عدد أحرف مقبولة 10 أحرف',
              })}
            />
          </FormRow>
          <Button type='submit' disabled={isSubmitting}>
            {email.labels.send[appLang]}
          </Button>
        </StyledForm>
      </MessageUs>

      <Footer>{rights[appLang]}</Footer>
    </ContactContainer>
  );
}

export default Contact;
