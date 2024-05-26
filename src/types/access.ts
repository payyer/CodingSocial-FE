export interface ISignInRespone {
  message: string;
  status: number;
  metadata: {
    user: {
      _id: string;
      user_name: string;
      user_email: string;
      user_roles: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface ISignUpRespone {
  message: string;
  status: number;
  metadata: {
    user: {
      _id: string;
      user_name: string;
      user_email: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface ISignUpInput {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILogout {
  accessToken: string;
  userId: string;
}

export interface ILogOutRespone {
  message: string;
  status: number;
  metadata: {
    acknowledged: boolean;
    deletedCount: number;
  };
}
