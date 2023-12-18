import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import login from "../api/auth/login";
import {
  AuthWrap,
  AuthInner,
  ContentWrap,
  ContentTitle,
  ContentInputWrap,
  ContentInputBox,
  ContentInput,
  ContentSumbitWrap,
  ContentSumbit,
  ContentInputImage,
  ContentMovePage,
  ContentSubTitle,
  ContentTitleWrapper,
} from "../styles/AuthStyled";

interface InputType {
  id: string;
  pw: string;
}

const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState<InputType>({
    id: "",
    pw: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const loginHandler = async () => {
    const res = await login({ id: input.id, password: input.pw });
    res && router.replace("/");
  };

  return (
    <>
      <Head>
        <title>UT - Login</title>
      </Head>
      <AuthWrap>
        <AuthInner>
          <ContentWrap>
            <ContentTitleWrapper>
              <ContentTitle src="/assets/logo.svg" />
              <ContentSubTitle>Are you T?</ContentSubTitle>
            </ContentTitleWrapper>
            <ContentInputWrap>
              <ContentInputBox>
                <ContentInputImage src="/assets/account.svg" />
                <ContentInput
                  name="id"
                  value={input.id}
                  onChange={handleChange}
                  type="text"
                  placeholder="아이디"
                />
              </ContentInputBox>
              <ContentInputBox>
                <ContentInputImage src="/assets/lock.svg" />
                <ContentInput
                  name="pw"
                  value={input.pw}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호"
                />
              </ContentInputBox>
            </ContentInputWrap>
            <ContentSumbitWrap>
              <ContentSumbit onClick={loginHandler}>로그인</ContentSumbit>
              <ContentMovePage href="/register">회원가입</ContentMovePage>
            </ContentSumbitWrap>
          </ContentWrap>
        </AuthInner>
      </AuthWrap>
    </>
  );
};
export default Login;
