import { z } from "zod";

export const hackerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.number().min(0).max(99),
  phoneNumber: z.string().min(16).max(16),
  email: z.string().email(),
  studyLevel: z.string().min(1),
  school: z.string().min(1),
  diet: z.string().min(1),
  teeSize: z.string().min(1),
  underrepresentedInTech: z.string().min(1),
  gender: z.string().min(1),
  major: z.string().min(1),
  orientation: z.string().min(1),
  pronouns: z.string().min(1),
  race: z.string().min(1),
});
