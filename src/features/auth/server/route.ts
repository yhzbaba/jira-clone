import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator";
import {loginSchema, registerSchema} from "@/features/auth/schemas";

const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
        async (c) => {
            const {email, password} = c.req.valid("json");
            console.log({email, password})
            return c.json({email, password, code: "200"})
        })
    .post(
        "/register",
        zValidator("json", registerSchema),
        async (c) => {
            const {name, email, password} = c.req.valid("json")
            console.log({name, email, password})
            return c.json({name, email, password})
        }
    )

export default app;