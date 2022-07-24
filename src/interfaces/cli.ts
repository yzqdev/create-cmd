export interface Variants {
  name: string;
  display: string;
  color: (str: string | number) => string | number;
}
export interface Framework {
  name: string;
  color: (str: string | number) => string | number;
  variants: Variants[];
}
export interface PromptResult {
  framework:Framework[]
  overwrite:string
  packageName:string
  variant:Variants
}