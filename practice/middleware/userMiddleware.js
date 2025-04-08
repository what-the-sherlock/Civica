
import { JWT_SECRET } from "../config";

const UserMiddleware = (req, res, next)=>{
    const token = req.headers.authorization;

    const words = token.split(" ")
    const userToken = words[1]
    const decodeValue = jwt.verify(userToken, JWT_SECRET)

    if(!decodeValue.username){
        next();
    }else{
        res.Status(403).json({
            msg: "Error",
        })
    }
}