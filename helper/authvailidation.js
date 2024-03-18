const jwt=require('jsonwebtoken');
const auth_key=require('../config/constaint')

 const generateToken=async(id)=>{
    try{
        const data={
            userid:id,
        };
        const option={
            expireIN:'1m'
        };
        token= await jwt.sign(data,auth_key.auth);
        return token;

    }catch(err){
        console.error(err);
    }

 }



const validate_token = async (req, res, next) => {
    try {
        // Extracting token from request headers
        let token = req.headers.authorization;
        if (!token || !token.startsWith("Bearer ")) {
            return res.status(400).send({ message: "Token not found or not in correct format" });
        }
        token = token.split("Bearer ")[1];

        // Verifying the token
        const match = await jwt.verify(token, auth_key.auth);
        if (!match) {
            return res.status(400).send({ message: "Authentication failed" });
        } else {
            // Token is valid, proceed to the next middleware
            next();
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Internal server error" });
    }
};




module.exports={generateToken,validate_token};