import React from "react";
import { Invoice } from "../../pages/invoice.model";
import Button, { btnVariant } from "../Button/Button";
import InputField from "../Form/InputField";
import { ThemeContext } from "../ThemeContext/theme-context";
import styles from "./form-panel.module.scss";
import set from "lodash/set";
import { mutate } from "swr";

type Props = {
  invoice?: Invoice;
};

type State = {
  invoice?: Invoice;
};

class FormPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      invoice: props.invoice || new Invoice(),
    };
    this.onSaveAndSend = this.onSaveAndSend.bind(this);
  }

  onDiscard() {}

  async onSaveAndSend() {
    const { invoice } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    };
    fetch("/api/invoices", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data ", data);
      });
  }

  handleFieldChange(path: string, value: string) {
    const { invoice } = this.state;
    set(invoice as Invoice, path, value);
    this.setState({ invoice });
  }

  render() {
    const { theme } = this.context;
    const { invoice } = this.state;
    return (
      <div id="formPanel" className={`${styles.formPanel} ${styles[theme]}`}>
        <form>
          <fieldset>
            <label className={styles.groupLabel}>Bill From</label>
            <InputField
              label="Street Address"
              id="streetAddress"
              value={invoice?.billFrom?.street}
              onChange={(value: string) =>
                this.handleFieldChange("billFrom.street", value)
              }
            ></InputField>
            <div className={styles.addressL2}>
              <InputField
                label="City"
                id="city"
                value={invoice?.billFrom?.city}
                onChange={(value: string) =>
                  this.handleFieldChange("billFrom.city", value)
                }
              ></InputField>
              <InputField
                label="zip"
                id="zip"
                value={invoice?.billFrom?.zip}
                onChange={(value: string) =>
                  this.handleFieldChange("billFrom.zip", value)
                }
              ></InputField>
              <InputField
                label="Country"
                id="country"
                value={invoice?.billFrom?.country}
                onChange={(value: string) =>
                  this.handleFieldChange("billFrom.country", value)
                }
              ></InputField>
            </div>
          </fieldset>
          <fieldset>
            <label className={styles.groupLabel}>Bill To</label>
            <InputField
              label="Client's Name"
              id="clientName"
              value={invoice?.client?.name}
              onChange={(value: string) =>
                this.handleFieldChange("client.name", value)
              }
            ></InputField>
             <InputField
              label="Client's Email"
              id="clientEmail"
              value={invoice?.client?.email}
              onChange={(value: string) =>
                this.handleFieldChange("client.email", value)
              }
            ></InputField>
              <InputField
              label="Street Address"
              id="clientStreetAddress"
              value={invoice?.client?.address.street}
              onChange={(value: string) =>
                this.handleFieldChange("client.address.street", value)
              }
            ></InputField>
               <div className={styles.addressL2}>
              <InputField
                label="City"
                id="clientCity"
                value={invoice?.client?.address?.city}
                onChange={(value: string) =>
                  this.handleFieldChange("client.address.city", value)
                }
              ></InputField>
              <InputField
                label="zip"
                id="clientZip"
                value={invoice?.client?.address?.zip}
                onChange={(value: string) =>
                  this.handleFieldChange("client.address.zip", value)
                }
              ></InputField>
              <InputField
                label="Country"
                id="clientCountry"
                value={invoice?.client?.address?.country}
                onChange={(value: string) =>
                  this.handleFieldChange("client.address.country", value)
                }
              ></InputField>
            </div>
          </fieldset>
        </form>
        <div className={styles.formActions}>
          <Button
            label="Discard"
            variant={btnVariant.btn_v2}
            onClick={this.onDiscard}
          ></Button>
          <div className={styles.formActionsSave}>
            <Button
              label="Save as Draft"
              variant={btnVariant.btn_v3}
              onClick={this.onDiscard}
            ></Button>
            <Button
              label="Save & Send"
              variant={btnVariant.btn_v2}
              onClick={this.onSaveAndSend}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}

FormPanel.contextType = ThemeContext;
export default FormPanel;
