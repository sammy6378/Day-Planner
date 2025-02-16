import { IUser } from "../models/userModel";
import { redis } from "./redis";
import  'dotenv/config';
import { Response } from "express";

interface tokenOptions {
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    secure?: boolean;
    sameSite?: "strict" | "lax" | "none";
}


const accessTokenExpires = parseInt(process.env.ACCESS_TOKEN_EXPIRES as string || "5");
const refreshTokenExpires = parseInt(process.env.REFRESH_TOKEN_EXPIRES as string || "7");


export const accesTokenOptions: tokenOptions ={
    expires: new Date(Date.now() + accessTokenExpires * 60 * 1000),
    maxAge: accessTokenExpires * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
    secure : process.env.NODE_ENV !== "production",
}


export const refreshTokenOptions: tokenOptions ={
    expires: new Date(Date.now() + refreshTokenExpires * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpires * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
    secure : process.env.NODE_ENV !== "production",
}


export const sendToken = async ( user : IUser, res: Response)=>{

    const access_token = user.signAccessToken();
    const refresh_token = user.signRefreshToken();


    // add user session to redis
    await redis.set(user._id as string, JSON.stringify(user));

    res.cookie('access_token', access_token, accesTokenOptions);
    res.cookie('refresh_token', refresh_token, refreshTokenOptions);
    res.status(200).json({
        success: true,
        user,
        accessToken: access_token,
    });
}