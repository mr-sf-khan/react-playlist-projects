import React, { useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import { useState } from "react";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className=" mx-auto ">
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
