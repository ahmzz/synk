import * as zod from "zod";

export const SignupValidationSchema = zod.object({
  username: zod.string().min(3).max(30),
});
