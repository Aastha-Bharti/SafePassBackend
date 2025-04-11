import express from 'express'
import { PasswordModel } from '../model'

const passwordRouter = express.Router()

passwordRouter.get('/', async (req, res) => {
    const passwords = await PasswordModel.find();
    res.json(passwords)
  });
  
passwordRouter.post('/', async (req, res) => {
    const newEntry = new PasswordModel(req.body);
    await newEntry.save();
    res.json(newEntry);
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