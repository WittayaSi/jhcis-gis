import jwt from 'jsonwebtoken';

export const toAuthJSON = (data) => {
    return {
        username: data.username,
        token: generateJWT(data.username)
    }
}

const generateJWT = (data) => {
    return jwt.sign({
        username: data        
    }, process.env.JWT_SECRET);
}