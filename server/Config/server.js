import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const user_id = process.env.SERVER_ID;
const user_pass = process.env.SERVER_PASS;

let url = process.env.MONGO_URI;

async function ConnectDB(req, res){
  
  return new Promise((resolve, reject)=>{
    mongoose.connect(url).
    then(()=>{
        console.log("Connected to Database: " + mongoose.connection.name);
        resolve();
    }).catch((err)=>{
        console.log("Cannot connect to Database");
        reject(err)
    })
  })
}

export default ConnectDB;
