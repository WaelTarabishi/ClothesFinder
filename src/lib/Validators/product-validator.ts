import { z } from "zod";

export const AVALIABLE_SIZES = ["S", "M", "L"] as const;
export const AVALIABLE_COLORS = [
  "white",
  "beige",
  "green",
  "purple",
  "blue",
] as const;

export const AVALIABLE_SORT = ["none", "price-asc", "price-desc"] as const;
export const ProductFilterValidator = z.object({
  size: z.array(z.enum(AVALIABLE_SIZES)),
  color: z.array(z.enum(AVALIABLE_COLORS)), // -> ['green','blue']   you can have multiple choisese
  sort: z.enum(AVALIABLE_SORT), // -> "none" | "price-asc" one of this only
  price: z.tuple([z.number(), z.number()]),
});

export type ProductState = Omit<
  z.infer<typeof ProductFilterValidator>,
  "price"
> & {
  price: { isCustom: boolean; range: [number, number] };
};
