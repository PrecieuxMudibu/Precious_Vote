export const decodeToken = (token) => {
    const removeBearer = token.split(' ')[1];
    return jwt_decode(removeBearer);
  };
  