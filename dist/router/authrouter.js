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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRouter = express_1.default.Router();
authRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const User = new model_1.userModel({
        username: username,
        password: password,
        email: email
    });
    const savedUser = yield User.save();
    res.json({ message: savedUser });
}));
authRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const existsUser = yield model_1.userModel.findOne({ username: username, password: password });
    if (!existsUser) {
        res.json({ message: "user doesnt exist" });
    }
    const token = jsonwebtoken_1.default.sign(username, "hellloworld");
    res.json({ message: token });
}));
exports.default = authRouter;
