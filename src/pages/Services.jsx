import styled, { css } from 'styled-components';
import FlexBox from '../ui/FlexBox';
import Description from '../ui/Description';
import { useContext } from 'react';
import { LanguageContextAPI } from '../contexts/LanguageContext';
import { appContent } from '../content/appContent';

const ServicesContainer = styled.div`
  ${(props) =>
    props.lang === 'en' &&
    css`
      direction: ltr;
    `}
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  direction: ltr;
  width: 100%;
  min-width: 32.5rem;
  max-width: 60rem;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
  height: 63vh;
`;
const Card = styled.div`
  background-color: var(--color-grey-50);
  border-radius: 5px;
  box-shadow: var(--shadow-md);
  position: relative;
  padding: 3rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  width: 15rem;
  height: 14rem;
  cursor: default;

  & svg {
    width: 3rem;
    height: 3rem;
  }
  &:hover {
    transition: all 0.3s ease;

    & svg {
      display: none;
    }
    h4 {
      top: 8%;
      font-size: 12px;
      width: 100%;
      text-align: center;
    }
    p {
      display: block;
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;
const Title = styled.h4`
  color: var(--color-grey-700);
  font-size: smaller;
  font-weight: 600;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 74%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
`;
const Text = styled.p`
  display: none;
  text-align: center;
  background-color: var(--color-grey-50);
  transition: ease 1s;
  font-size: 11px;
  font-weight: 500;
  padding: 1rem;
  width: 15rem;
  height: 14rem;
  margin-bottom: 0;
`;

function Services() {
  const { appLang } = useContext(LanguageContextAPI);
  const { servicesContent } = appContent();
  return (
    <ServicesContainer lang={appLang}>
      <FlexBox>
        <Description>
          <h1>{servicesContent.title[appLang]}</h1>
          <h4>{servicesContent.description.title[appLang]}</h4>
          <p>{servicesContent.description.text[appLang]}</p>
        </Description>

        <CardsContainer>
          {servicesContent.services.map((service) => (
            <Card key={service.serviceDescription.ar}>
              <Text>{service.serviceDescription[appLang]}</Text>
              {<service.serviceIcon.icon color={service.serviceIcon.color} />}
              <Title>{service.serviceName[appLang]}</Title>
            </Card>
          ))}
        </CardsContainer>
      </FlexBox>
    </ServicesContainer>
  );
}
export default Services;
