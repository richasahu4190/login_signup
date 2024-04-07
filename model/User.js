import pool from "../utils/DBConnection";

const fetchDataFromDB=async()=>{
    try  {
        const res = await pool.connect();
        console.log("Database connected");
        const result=await res.query('SELECT * FROM public.users');
        const data=result.rows;
        console.log("Fetched Data",data);
        return data;
      } catch (err) {
          console.error(err);
      }


};

fetchDataFromDB().then((data)=>{console.log(data)}).catch((e)=>console.log(e));