import { ThemeContext, themes } from "../ThemeContext/theme-context";
import styles from "./Button.module.scss";

export enum btnSizes {
  sm = "sm",
}
export enum btnVariant {
  btn_v1 = "btn_v1",
  btn_v2 = "btn_v2",
  btn_v3 = "btn_v3",
  btn_v4 = "btn_v4",
  btn_v5 = "btn_v5",
}
type ButtonProps = {
  onClick?: any;
  variant: btnVariant;
  className?: string;
  label: string;
  size?: btnSizes;
  disabled?: boolean;
};

const Button = ({ disabled, label, variant, onClick }: ButtonProps) => {
  const activeClassnames = (theme: themes) => {
    const names = [styles.btn, styles[variant], styles[variant + '--' + theme]];
    return names.join(' ');
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          className={activeClassnames(theme)}
          disabled={disabled}
          onClick={onClick}
        >
          {variant === btnVariant.btn_v1 && (
            <i>
              <img src="icons/icon-plus.svg" alt="plus" />
            </i>
          )}
          <span className={styles.btn__label}>{label}</span>
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default Button;
