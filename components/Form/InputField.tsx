import React from "react";
import styles from "./input-field.module.scss";

type Props = {
  id: string;
  label: string;
  className?: string;
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export default class InputField extends React.PureComponent {
  props: Props;
  constructor(props: Props) {
    super(props);
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    const {target: {value}} = e;
    const {onChange} = this.props;
    onChange && onChange(value);
  }
   get fieldClassNames() {
    const { className } = this.props;
    const classNames = [className, styles.inputWrapper ]

     return classNames.join(' ');
   }

  render() {
    const { value, id, label, placeholder } = this.props;
    return (
      <div className={this.fieldClassNames}>
        <div className={styles.controlText}>
          <label className={styles.fieldLabel} htmlFor={id}>
            {label}
          </label>
          <span className={styles.fieldError}>Can't be empty.</span>
        </div>
        <input
          id={id}
          className={styles.inputField}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
