import Header from "@/components/header";
import Link from "next/link";
import styled from "styled-components";

const Index = () => {
  return (
    <>
      <Header />
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <LogoWrapper>
              <Logo src="/assets/Logo.svg" />
              <Title>나의 T는 몇퍼센트?</Title>
            </LogoWrapper>
          </LogoWrapper>
          <Start href="/survey">테스트 시작!</Start>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default Index;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 28px;

  padding-bottom: 20px;
`;

const Logo = styled.img`
  width: 140px;
  height: 140px;

  padding-left: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Start = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 82px;
  background-color: #ffac71;
  border-radius: 50px;
  border: 3px solid rgb(79, 79, 79);
  cursor: pointer;

  font-size: 18px;
  font-weight: 800;
`;
