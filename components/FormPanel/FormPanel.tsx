import React from "react";
import Button, { btnVariant } from "../Button/Button";
import InputField from "../Form/InputField";
import { ThemeContext } from "../ThemeContext/theme-context";
import styles from "./form-panel.module.scss";

type Props = {};

class FormPanel extends React.Component {
  onDiscard() {}
  render() {
    const {theme} = this.context;
    return (
      <div id="formPanel" className={`${styles.formPanel} ${styles[theme]}`}>
        <form>
          <fieldset>
            <label className={styles.groupLabel}>Bill From</label>
            <InputField
              label="Street Address"
              id="streetAddress"
              value={""}
            ></InputField>
            <div className={styles.addressL2}>
              <InputField label="City" id="city" value={""}></InputField>
              <InputField label="zip" id="zip" value={""}></InputField>
              <InputField label="State" id="state" value={""}></InputField>
            </div>
          </fieldset>

          <div className={styles.formFooter}>
            <Button
              label="Discard"
              variant={btnVariant.btn_v2}
              onClick={this.onDiscard}
            ></Button>
            <div className={styles.formFooterSaveActions}>
              <Button
                label="Save as Draft"
                variant={btnVariant.btn_v3}
                onClick={this.onDiscard}
              ></Button>
              <Button
                label="Save & Send"
                variant={btnVariant.btn_v2}
                onClick={this.onDiscard}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

FormPanel.contextType = ThemeContext;
export default FormPanel;
