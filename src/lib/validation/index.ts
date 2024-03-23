import * as zod from "zod";

export const SignupValidationSchema = zod.object({
  fullName: zod.string().min(3, { message: "Name too short" }),
  userName: zod.string().min(3).max(30),
  email: zod.string().email(),
  password: zod
    .string()
    .min(9, { message: "Password must be of 8 characters atleast" }),
});
