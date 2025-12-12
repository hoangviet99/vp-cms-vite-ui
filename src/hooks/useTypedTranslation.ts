import _common from "@/locales/en.json";
import { useTranslation } from "react-i18next";

type dict = typeof _common;

// returns the property value from object O given property path T
type GetDictValue<T extends string, O> = T extends `${infer A}.${infer B}`
  ? A extends keyof O
    ? GetDictValue<B, O[A]>
    : never
  : T extends keyof O
  ? O[T]
  : never;

type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]-?: `${K & string}` | Concat<K & string, DeepKeys<T[K]>>;
    }[keyof T]
  : "";

type Concat<K extends string, P extends string> = `${K}${"" extends P
  ? ""
  : "."}${P}`;

export const useTypedTranslation = () => {
  const { t, i18n, ready } = useTranslation();

  const tTyped = <P extends DeepKeys<dict>>(
    key: P,
    options?: Record<string, unknown> | string
  ): GetDictValue<P, dict> => {
    if (typeof options === "string") {
      return t(key, options) as GetDictValue<P, dict>;
    }
    return t(key, { ...options }) as GetDictValue<P, dict>;
  };

  return {
    t: tTyped,
    i18n,
    ready,
  };
};
