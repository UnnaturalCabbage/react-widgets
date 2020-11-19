import { createContext, useContext } from "react";

export class AuthService {
  singIn(): void {
    console.log("SingIn called");
  }
}

const AuthContext = createContext<AuthService | null>(null);
export const AuthProvider = AuthContext.Provider;
// export const AuthProvider: FunctionComponent = props => <AuthContext.Provider value={new AuthService()}>{props.children}</AuthContext.Provider>;
export const useAuthService = () => useContext(AuthContext);
