import React from "react";
import styles from "./form-panel.module.scss";

type Props = {};

class FormPanel extends React.Component {
  render() {
    return <div id="formPanel" className={styles.formPanel}><form>
        <label>Bill To</label>
        <fieldset>
            <input type="text" id="streetAddress"/>
        </fieldset>
        </form></div>;
  }
}

export default FormPanel;
