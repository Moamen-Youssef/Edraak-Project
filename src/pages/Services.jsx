import styled from 'styled-components';
import FlexBox from '../ui/FlexBox';
import { BsFillBarChartFill, BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import { IoLayersSharp } from 'react-icons/io5';
import { FaHouseUser } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import Description from '../ui/Description';
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
    color: #08f8f8 ;
  }
  &:hover {
    transition: all 0.3s ease;

    & svg {
      display: none;
    }
    h4 {
      top: 8%;
      font-size: larger;
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
  top: 70%;
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
  width: 15rem;
  height: 14rem;
  padding: 1rem;
`;


function Services() {
  return (
    <FlexBox>
      
       <Description>
       <h1>خدماتنا</h1>
        <h4>نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا</h4>
        <p>نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا</p>
       </Description>

      <CardsContainer>
        <Card>
          <Text>
            نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص
            تخيلي نص تخيلي نص تخيلي نص تخيلي نص
          </Text>
          <BsFillBarChartFill color='#9f6bd1' />
          <Title>تحليل البيانات</Title>
        </Card>
        <Card>
          <Text>
            نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص
            تخيلي نص تخيلي نص تخيلي نص تخيلي نص
          </Text>
          <RiVerifiedBadgeLine color='#bef1be' />
          <Title>خدمات الجودة</Title>
        </Card>
        <Card>
          <Text>
            نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص
            تخيلي نص تخيلي نص تخيلي نص تخيلي نص
          </Text>
          <IoLayersSharp color='#367cff' />
          <Title>تطوير البرمجيات</Title>
        </Card>
        <Card>
          <Text>
            نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص
            تخيلي نص تخيلي نص تخيلي نص تخيلي نص
          </Text>
          <FaHouseUser color='#eeaa2c' />
          <Title>الموارد البشرية</Title>
        </Card>
        <Card>
          <Text>
            نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص
            تخيلي نص تخيلي نص تخيلي نص تخيلي نص
          </Text>
          <LuUsers color='#e7e754'/>
          <Title>خدمات استشارية</Title>
        </Card>
        <Card>
          <Text>
            نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص
            تخيلي نص تخيلي نص تخيلي نص تخيلي نص
          </Text>
          <BsReverseLayoutTextWindowReverse color='' />
          <Title> واجهات المستخدم</Title>
        </Card>
      </CardsContainer>
   
    </FlexBox>
  );
}
export default Services;
