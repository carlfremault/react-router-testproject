import { object, string } from 'zod';

export const noteSchema = object({
  id: string(),
  title: string(),
  category: string(),
  content: string(),
});
