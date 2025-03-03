import { app } from "./app";
import { connnectDb } from "./dbConfig.ts/config";

;(async()=>{
    // await connnectDb();
  })()
  
  
  const port = process.env.PORT!;
  app.listen(port, () => {
    console.log("app is running on the port no ", port);
  });
  