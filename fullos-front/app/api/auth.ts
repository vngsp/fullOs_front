import { AuthSchema, AuthSchemaObj } from "../schemas/authSchema";
import { req } from "./api";

export const registerUser = async (data: AuthSchemaObj) => {
    const parsed = AuthSchema.parse(data);
    const res = await req.post('/register', parsed);
    return res.data;
}