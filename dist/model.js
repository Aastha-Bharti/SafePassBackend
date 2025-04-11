"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModel = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGO_URI);
const userSchema = new mongoose_1.default.Schema({
    username: String,
    email: String,
    password: String
});
const PasswordSchema = new mongoose_1.default.Schema({
    website: String,
    username: String,
    password: String,
});
exports.userModel = mongoose_1.default.model("User", userSchema);
exports.PasswordModel = mongoose_1.default.model("Password", PasswordSchema);
