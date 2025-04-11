"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = require("../model");
const passwordRouter = express_1.default.Router();
passwordRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const passwords = yield model_1.PasswordModel.find();
    res.json(passwords);
}));
passwordRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newEntry = new model_1.PasswordModel(req.body);
    yield newEntry.save();
    res.json(newEntry);
}));
passwordRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield model_1.PasswordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
}));
passwordRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield model_1.PasswordModel.findByIdAndDelete(req.params.id);
    res.json({ success: true });
}));
exports.default = passwordRouter;
