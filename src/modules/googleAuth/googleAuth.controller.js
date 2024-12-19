import { OAuth2Client } from "google-auth-library";
import { generateJWT } from "../../utiltes/jwt.js";
import { saveUser } from "../user/user.controller.js";
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
