import { Button } from "#components/shadcn/button";
import { useLocalStorage } from "#lib/hooks/localstorage";
import { useEffect } from "react";

import GithubIcon from "~/assets/ico/github-logo.svg?react";
import SunIcon from "~/assets/ico/sun.svg?react";
import MoonIcon from "~/assets/ico/moon.svg?react";
import EnvelopeIcon from "~/assets/ico/envelope.svg?react";

export default function NavbarButtonGroup() {
  let [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    // Set document's theme class to currently selected theme
    document.documentElement.className = theme;
  }, [theme]);

  function handleThemeButtonClick() {
    let oppositeTheme = theme === "light" ? "dark" : "light";
    setTheme(oppositeTheme);
  }
  return (
    <div className="flex flex-row grow-0 gap-0.5">
      {/*Buttons for some shortcuts or links*/}
      <Button
        className="size-10 text-primary-foreground fill-current"
        render={
          <button onClick={handleThemeButtonClick}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        }
      />
      <Button
        className="size-10 text-primary-foreground fill-current"
        nativeButton={false}
        render={
          <a href="https://github.com/Mina-1316" target="_blank">
            <GithubIcon />
          </a>
        }
      />
      <Button
        className="size-10 text-primary-foreground fill-current"
        nativeButton={false}
        render={
          <a href="mailto:mina1316.canreply@gmail.com">
            <EnvelopeIcon />
          </a>
        }
      />
    </div>
  );
}
