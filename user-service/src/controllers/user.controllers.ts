import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.models";
import { z } from "zod";

const userSignupSchema = z.object({
    email: z.string(),
    password: z.string().min(8)
})


const userLoginSchema = z.object({
    email: z.string(),
    password: z.string().min(8)
})

export const login = async(req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    
    const user = await User.findOne({ email: email });

    if(user){
       res.status(200).json({
         message: "user already exists",
       }); 
    }

    await User.create({
        email,
        password
    })



    res.status(200).json({
        "message": "login successfull"
    })
}