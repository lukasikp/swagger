import { ReactNode, createContext } from "react";
import { Definitions } from "../../types/Definitions";

export const DefinitionContext = createContext({});

export interface DefinitionContextData {
  definitions: Definitions;
}

export const DefinitionProvider = ({
  children,
  definitions,
}: {
  children: ReactNode;
  definitions: Definitions;
  swagger: any;
}) => {
  const value: DefinitionContextData = {
    definitions,
  };
  return (
    <DefinitionContext.Provider value={value}>
      {children}
    </DefinitionContext.Provider>
  );
};
