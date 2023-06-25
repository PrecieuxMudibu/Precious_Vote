import jwt_decode from "jwt-decode";

export const decode_token = (token) => {
    const token_without_bearer = token.split(' ')[1];
    return jwt_decode(token_without_bearer);
};
  