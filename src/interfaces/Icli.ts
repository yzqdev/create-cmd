export interface Ivariants {
  name: string;
  display: string;
  color: (str: string | number) => string | number;
}
export interface IFramework {
  name: string;
  color: (str: string | number) => string | number;
  variants: Ivariants[];
}
