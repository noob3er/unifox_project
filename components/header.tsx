import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderWrapper>
            <Logo src="/assets/Logo.svg" />
            <Content href={"/login"}>로그인</Content>
          </HeaderWrapper>
        </HeaderContainer>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  position: fixed;
  justify-content: center;
  padding-top: 16px;
  top: 0;
`;

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 520px;

  border: 2px solid black;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 940px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const Interface = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 196px;
  height: 100%;

  padding: 0 16px;

  gap: 20px;
`;

const Content = styled(Link)`
  font-size: 18px;
  font-weight: 500;
`;

const Logo = styled.img`
  padding: 6px 0;

  height: 48px;
  width: 48px;
`;
