import { createContext, useState, ReactNode } from "react";

// Define the context
export const AppContext = createContext<any>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>(''); // Initialize with an empty string

  const handleSetValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppContext.Provider value={{ value, handleSetValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
