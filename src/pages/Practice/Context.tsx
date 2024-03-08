import { Button } from "@chakra-ui/react";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
  memo,
} from "react";

interface ThemeContextProps {
  darkTheme: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkTheme: false,
  toggle: () => {},
});

export const Context = () => {
  console.log("App render");
  return (
    <App>
      <Consumer />
    </App>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

export const App: FC<PropsWithChildren> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggle = () => setDarkTheme((prev) => !prev);

  const contextVale = useMemo(
    () => ({
      darkTheme,
      toggle,
    }),
    [toggle, darkTheme]
  );

  return (
    <ThemeContext.Provider value={contextVale}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Consumer = memo(() => {
  const { darkTheme, toggle } = useThemeContext();
  console.log("Consumer render");

  return (
    <div>
      <Button onClick={toggle}>{darkTheme ? "dark" : "light"}</Button>
    </div>
  );
});
