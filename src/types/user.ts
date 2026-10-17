export type UserMode = "client" | "professional";

export type User = {
  id: string;
  email: string;
  name?: string;
  is_client: boolean;
  is_professional: boolean;
};

export type UserSession = {
  user: User;
  accessToken: string;
};
