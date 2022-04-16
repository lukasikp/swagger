export type themeTypes = "default" | "get" | "post" | "put" | "delete";

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
    button: `text-sm bg-blue-300 hover:bg-blue-400`,
    panel: `bg-blue-200`,
  },
  post: {
    background: "bg-slate-100",
    button: `text-sm bg-red-300 hover:bg-red-400`,
    panel: `bg-red-200`,
  },
  put: {
    background: "bg-slate-100",
    button: `text-sm bg-orange-300 hover:bg-orange-400`,
    panel: `bg-orange-200`,
  },
  delete: {
    background: "bg-slate-100",
    button: `text-sm bg-indigo-300 hover:bg-indigo-400`,
    panel: `bg-indigo-200`,
  },
};
