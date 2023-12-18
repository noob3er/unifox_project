import styled from "styled-components";

export const AuthWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export const AuthInner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrap = styled.div`
  width: 85%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 14px;
`;
export const ContentTitle = styled.img`
  height: 126px;
`;

export const ContentSubTitle = styled.p`
  font-size: 28px;
  font-weight: 900;
`;

export const ContentInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ContentInputBox = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #5f95ff;
  padding: 0 20px;
  border-radius: 8px;

  border: 3px solid rgb(79, 79, 79);
`;

export const ContentInputImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const ContentInput = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background-color: transparent;

  &::placeholder {
    color: white;
  }
`;

export const ContentSumbitWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentMovePage = styled.a`
  width: 100%;
  text-align: right;
  padding-top: 8px;
  font-size: 14px;
  font-weight: 600;
`;

export const ContentSumbit = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: #ffac71;
  border: 3px solid rgb(79, 79, 79);

  font-size: 16px;

  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
`;
