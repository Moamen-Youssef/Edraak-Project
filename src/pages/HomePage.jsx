import styled from 'styled-components';
import FlexBox from '../ui/FlexBox';

const Container = styled.div`

  padding: 2rem;

`
const Text = styled.div`
  padding: 0 0.5rem;
  color: var(--color-grey-700);
  & h1 {
    font-weight: 700;
    color: var(--color-brand-100);
    padding: 1rem 0.2rem;
  }

`;
function HomePage() {
  return (
    <Container>
    <FlexBox>
      <Text>
        <h1 className='lg:text-4xl'>إدراك الرقمية لتقنية المعلومات</h1>
        <p className='md:w-[80%] lg:text-4xl'>
          مؤسسة سعودية مقرها الرئيسي بمدينة الرياض متخصصة في مجال تكنولوجيا
          المعلمات والأمن السيبراني تعمل على خدمة القطاعين العام والخاص وكسب
          رضاء الشركاء وبناء شركات قوية ومستمرة
        </p>
      </Text>
      <img
        src='../public/cloud-data.png'
        alt='software'
        className='h-[45vh] w-[100%] sm:w-[40rem] sm:h-[30vh] md:w-[55%] lg:w-[100%] lg:h-[54vh]'
      />
    </FlexBox>
    </Container>

  );
}

export default HomePage;
