import { setCookie } from "cookies-next";
import api from "..";
interface Payload {
  id: string;
  password: string;
}

interface AuthResDto {
  accessToken: string;
}

const login = async (payload: Payload): Promise<AuthResDto | null> => {
  try {
    const { data } = await api.post("/auth/login", payload);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
    setCookie("accessToken", data.accessToken);
    return data;
  } catch {
    alert("로그인에 실패했습니다.");
    return null;
  }
};

export default login;
