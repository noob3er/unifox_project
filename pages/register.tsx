import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import register from "../api/auth/register";
import {
  AuthInner,
  AuthWrap,
  ContentInput,
  ContentInputBox,
  ContentInputImage,
  ContentInputWrap,
  ContentMovePage,
  ContentSumbit,
  ContentSumbitWrap,
  ContentTitle,
  ContentWrap,
} from "../styles/AuthStyled";

interface InputType {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

const Register = () => {
  const router = useRouter();

  const [input, setInput] = useState<InputType>({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const registerHandler = async () => {
    if (input.password !== input.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (
      input.password === "" ||
      input.passwordCheck === "" ||
      input.name === "" ||
      input.email === ""
    ) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
    if (input.password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    if (input.password.length > 20) {
      alert("비밀번호는 20자 이하여야 합니다.");
      return;
    }
    const res = await register({
      name: input.name,
      email: input.email,
      password: input.password,
    });
    res && router.replace("/");
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <Head>
        <title>UT - Register</title>
      </Head>

      <AuthWrap>
        <AuthInner>
          <ContentWrap>
            <ContentTitle src="/assets/logo.svg" />
            <ContentInputWrap>
              <ContentInputBox>
                <ContentInputImage src="/assets/account.svg" />
                <ContentInput
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="닉네임"
                />
              </ContentInputBox>
              <ContentInputBox>
                <ContentInputImage src="/assets/email.svg" />
                <ContentInput
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  placeholder="이메일"
                />
              </ContentInputBox>
            </ContentInputWrap>
            <ContentInputWrap>
              <ContentInputBox>
                <ContentInputImage src="/assets/lock.svg" />
                <ContentInput
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호"
                />
              </ContentInputBox>
              <ContentInputBox>
                <ContentInputImage src="/assets/lock.svg" />
                <ContentInput
                  name="passwordCheck"
                  value={input.passwordCheck}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호 확인"
                />
              </ContentInputBox>
            </ContentInputWrap>
            <ContentSumbitWrap>
              <ContentSumbit onClick={registerHandler}>회원가입</ContentSumbit>
              <ContentMovePage href="/login">로그인</ContentMovePage>
            </ContentSumbitWrap>
          </ContentWrap>
        </AuthInner>
      </AuthWrap>
    </>
  );
};

export default Register;
