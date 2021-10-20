/**
 * Required External Modules and Interfaces
 */


import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";
import { request } from "http";
 
/**
 * Router Definition
 */

export const itemsRouter = express.Router();


/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
      try {
            const items: Item[] = await ItemService.findAll();
        
            res.status(200).send(items);
      } catch(error) {
        
            res.status(500).send(error);
      }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
      const id: number = parseInt(req.params.id, 10);

      try {
           
            const item: Item = await ItemService.find(id);

            if (item) {
                  return res.status(200).send(item);
            } else {
                  res.status(404).send("item not found");
            }            

      } catch (e: any) {
            res.status(500).send(e.message);
      }
})


// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
      try {
            const item: BaseItem = req.body;

            const newItem = await ItemService.create(item);

            res.status(201).json(newItem);

      } catch (er : any) {
            res.status(500).send(er.message);
      }
})

// put items/:id


itemsRouter.put("/:id", async (req: Request, res: Response) => {
      
      const id: number = parseInt(req.params.id, 10);
      
      try {
            const itemUpdate: Item = req.body;

            const existingItem: Item = await ItemService.find(id);


            if (existingItem) {
                  const updateItem = await ItemService.update(id, itemUpdate);
                  
                  res.status(200).json(updateItem);
            }


            const newItem = await ItemService.create(itemUpdate);

            res.status(201).json(newItem);
      } catch (er : any) {
            res.status(500).send(er.message);
      }
})




// delete items/:id


itemsRouter.delete("/:id", async (req: Request, res: Response) => {
      try {
            const id: number = parseInt(req.params.id, 10);

            await ItemService.remove(id);

            res.sendStatus(204);
            
      } catch (er:any) {
            res.status(500).send(er.message);
      }
})












