import React, {
  ReactNode,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface DrawerContextProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  open: true,
};

export const DrawerContext = createContext<DrawerContextProps>(defaultState);
const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
