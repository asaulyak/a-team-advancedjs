import { number, object, string } from 'yup';

/**
 * Usage:
 * const schema = await ratingSchema.validate(formData);
 * https://www.npmjs.com/package/yup
 */
export const ratingSchema = object({
  email: string().email().required(),
  comment: string().min(5).required(),
  rating: number().min(0).max(5).integer().required(),
});
