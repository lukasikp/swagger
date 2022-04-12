export type themeTypes = "default" | "get";

interface ThemeProperties {
  background: string;
  button: string;
  panel: string;
}

export const themes: Record<themeTypes, ThemeProperties> = {
  default: {
    background: "bg-slate-100",
    button: "text-md text-black bg-transparent pl-0",
    panel: "pl-0",
  },
  get: {
    background: "bg-slate-100",
    button: "text-sm bg-purple-100 hover:bg-purple-200",
    panel: "",
  },
};
