import express, {Request,Response} from "express"

const app = express()


app.get("/", (req: Request, res : Response): void => {
      const num: number = 33;
      console.log(num);
      res.json({message: "hello nodejs world"})
})


app.listen("3001", () => {
      console.log("server running !! ")
})

