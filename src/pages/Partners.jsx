import styled, { css } from 'styled-components';
import FlexBox from '../ui/FlexBox';
import Description from '../ui/Description';
import { appContent } from '../content/appContent';
import { useContext } from 'react';
import { LanguageContextAPI } from '../contexts/LanguageContext';

const Container = styled.div`
  ${(props) =>
    props.lang === 'en' &&
    css`
      direction: ltr;
    `}
`;
const PartnersBox = styled.div`
  min-width: 30rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  height: 40rem;
  margin: 2rem auto;
`;
const Card = styled.div`
  background-color: var(--color-grey-50);
  border-radius: 5px;
  box-shadow: var(--shadow-md);
  position: absolute;

  ${(props) =>
    props.type === 'vertical' &&
    css`
      padding: 0.7rem 2rem;
    `}
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      padding: 1.3rem 1.4rem;
    `}
  ${(props) =>
    props.type === 'horizontal-md' &&
    css`
      padding: 2rem 3.2rem;
    `}
  ${(props) => css`
    top: ${props?.position?.top};
    right: ${props?.position?.right};
    left: ${props?.position?.left};
    bottom: ${props?.position?.bottom};
    transform: translate(${props?.position?.top}, ${-props?.position?.right});
    transform: translate(${-props?.position?.left}, ${-props?.position?.top});
    transform: translate(
      ${-props?.position?.bottom},
      ${-props?.position?.left}
    );
  `}
`;

function Partners() {
  const { appLang } = useContext(LanguageContextAPI);
  const { partnersContent } = appContent();
  const { title, description } = partnersContent;
  return (
    <Container lang={appLang}>
      <FlexBox>
        <Description >
          <h1>{title[appLang]}</h1>
          <h4>{description.title[appLang]}</h4>
          <p>{description.text[appLang]}</p>
        </Description>
        <PartnersBox>
          <Card type='horizontal' position={{ top: '4%', right: '33%' }}>
            Box 1
          </Card>
          <Card type='horizontal' position={{ top: '4%', left: '19%' }}>
            Box 2
          </Card>
          <Card type='horizontal-md' position={{ top: '20%', right: '37%' }}>
            Box 3
          </Card>
          <Card type='horizontal' position={{ top: '21%', left: '1%' }}>
            Box 4
          </Card>
          <Card type='horizontal' position={{ top: '36%', left: '1%' }}>
            Box 5
          </Card>
          <Card type='horizontal' position={{ top: '52%', left: '1%' }}>
            Box 6
          </Card>
          <Card type='horizontal' position={{ top: '40%', left: '30%' }}>
            Box 7
          </Card>
          <Card type='horizontal' position={{ top: '21%', right: '11%' }}>
            Box 8
          </Card>
          <Card type='horizontal' position={{ bottom: '29%', right: '10%' }}>
            Box 9
          </Card>
          <Card type='horizontal' position={{ top: '40%', right: '19%' }}>
            Box 10
          </Card>
          <Card type='horizontal-md' position={{ bottom: '27%', left: '28%' }}>
            Box 11
          </Card>
        </PartnersBox>
      </FlexBox>
    </Container>
  );
}

export default Partners;
