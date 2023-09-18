import jwt_decode from "jwt-decode";

export const decode_token = (token) => {
    const token_without_bearer = token.split(' ')[1];
    return jwt_decode(token_without_bearer);
};
  
export const isObject = (data) => {
    if (typeof data === 'object' && data !== null && !Array.isArray(data))
        return true;
    return false;
};

export const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME
