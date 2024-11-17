import { Hono } from "https://deno.land/x/hono/mod.ts";
import { registerUser } from "./routes/register.js";

const app = new Hono();

//Launch the register form
app.get('/register', async (c) => {
    return c.html(await Deno.readTextFile('./views/register.html'));
});

//post request for registration
app.post('/register', registerUser);

Deno.serve(app.fetch);