import express from 'express'
import { PasswordModel } from '../model'

const passwordRouter = express.Router()

passwordRouter.get('/', async (req, res) => {
    const passwords = await PasswordModel.find();
    res.json(passwords)
  });
  

  passwordRouter.post('/', async (req, res) => {
    try {
      console.log("🔍 Incoming POST body:", req.body); // log what's sent
      const newEntry = new PasswordModel(req.body);
      await newEntry.save();
      res.json(newEntry);
    } catch (error) {
      console.error("❌ Error in POST /password:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
passwordRouter.put('/:id', async (req, res) => {
    const updated = await PasswordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  });
  
passwordRouter.delete('/:id', async (req, res) => {
    await PasswordModel.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  });

export default passwordRouter