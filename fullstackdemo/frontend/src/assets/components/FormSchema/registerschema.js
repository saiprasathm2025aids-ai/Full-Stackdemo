
import z from "zod";

export const registerschema=z.object({
    name: z.string().min(3,"Name must contain 3 character"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8,"Password should be minimum of 3 characters"),
    age: z.coerce.number().min(18,"Age should be minimum of 18")
})