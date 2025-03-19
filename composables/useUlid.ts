import { ulid as u } from "ulid";


/**
 * Generates a lowercased ULID string.
 *
 * @returns A ULID lowercased string, e.g. "01gd4v4y3jzkrq4j2qwhv1q5qj".
 */
export function ulid(): string {
  return u().toLowerCase();
}

export const useUlid = () => {
  return { ulid };
};
