import { setCookie } from "cookies-next";
import api from "..";

interface Payload {
  name: string;
  email: string;
  password: string;
}

interface AuthResDto {
  accessToken: string;
}

const register = async (payload: Payload): Promise<AuthResDto | null> => {
  try {
    const { data } = await api.post("/auth/register", payload);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
    setCookie("accessToken", data.accessToken);
    return data;
  } catch {
    alert("회원가입에 실패했습니다.");
    return null;
  }
};

export default register;
