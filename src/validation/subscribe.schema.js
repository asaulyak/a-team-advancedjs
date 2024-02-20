import { object, string } from 'yup';

/**
 * Usage:
 * const schema = await subscribeSchema.validate(formData);
 * https://www.npmjs.com/package/yup
 */
export const subscribeSchema = object({
  email: string().email().required(),
});
