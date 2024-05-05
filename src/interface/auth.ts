interface UserInfo {
  name: string;
  email: string;
  password: string;
}

interface UserLogin {
  email: string;
  password: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface MetaData {
  user: User;
  tokens: Tokens;
}

interface DataRespone {
  code: number;
  metadata: MetaData;
}
