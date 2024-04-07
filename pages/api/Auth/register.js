import pool from "@/utils/DBConnection";
import User from "@/model/User";
import Joi from "joi";
import bcrypt from "bcrypt";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  
  export default async (req, res) => {
    const client = await pool.connect();
  
    try {
      const { name, email, password } = req.body;
  
      const { error } = schema.validate({ name, email, password });
  
      if (error) {
        return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });
      }
  
      const queryFindUser = 'SELECT * FROM users WHERE email = $1';
      const resultFindUser = await client.query(queryFindUser, [email]);
  
      if (resultFindUser.rows.length > 0) {
        return res.status(401).json({ success: false, message: "Email already exists, please login" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      const queryCreateUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
      const resultCreateUser = await client.query(queryCreateUser, [name, email, hashPassword]);
  
      if (resultCreateUser.rows.length > 0) {
        return res.status(200).json({ success: true, message: "Account created successfully" });
      }
    } catch (error) {
      console.log("Error in register_user (server) => ", error);
      res.status(500).json({ success: false, message: "Something went wrong" });
    } finally {
      client.release();
    }
  };