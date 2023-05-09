import { config } from "dotenv";
config();

export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
