import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Result = () => {
  const router = useRouter();
  const { score } = router.query;

  return (
    <>
      <Container>
        <Wrapper>
          <MainTitle>결과</MainTitle>
          <Sub>당신의 T 점수는 {score}점입니다.</Sub>
          <ButtonWrapper>
            <ReturnMain href={"/"}>메인 화면으로 돌아가기</ReturnMain>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Result;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

const MainTitle = styled.h1`
  font-size: 38px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 840px;
  height: 60px;
`;

const ReturnMain = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  border-radius: 10px;
  background-color: #5f95ff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Sub = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
