import * as z from "zod";

export const LoginSchema = z.object({
  username: z
    .string({
      required_error: "Username is required!",
    }).email(),
  password: z
    .string({
      required_error: "Password is required!",
    })
    .min(6, "Password must be at least 6 characters"),
});