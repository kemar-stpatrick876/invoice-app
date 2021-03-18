import React from "react";
import { ThemeContext, themes } from "./theme-context";
import styles from "./ThemedButton.module.scss";

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme}>
            {theme === themes.dark ? (
              <img src="/icons/icon-sun.svg" alt="sun" />
            ) : (
              <img src="/icons/icon-moon.svg" alt="moon" />
            )}
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
