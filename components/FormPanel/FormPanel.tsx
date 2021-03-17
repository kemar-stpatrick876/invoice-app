import React from "react";
import { Invoice, PAYMENT_TERM_OPTIONS } from "../../pages/invoice.model";
import Button, { btnVariant } from "../Button/Button";
import InputField from "../Form/InputField";
import { ThemeContext } from "../ThemeContext/theme-context";
import styles from "./form-panel.module.scss";
import set from "lodash/set";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

type Props = {
  invoice?: Invoice;
  closeFormPanel: Function;
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
    this.onSelectPaymentTerm = this.onSelectPaymentTerm.bind(this);
  }

  onDiscard() {}

  async onSaveAndSend() {
    const { invoice } = this.state;
    const {closeFormPanel} = this.props;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    };
    fetch("/api/invoices", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data ", data);
        closeFormPanel();
      });
  }

  handleFieldChange(path: string, value: string) {
    const { invoice } = this.state;
    set(invoice as Invoice, path, value);
    this.setState({ invoice });
  }
  onSelectPaymentTerm(e: any) {
    const {value} = e;
    this.handleFieldChange('paymentTerm', value)
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
              value={invoice?.senderAddress?.street}
              onChange={(value: string) =>
                this.handleFieldChange("senderAddress.street", value)
              }
            />
            <div className={styles.addressL2}>
              <InputField
                label="City"
                id="city"
                value={invoice?.senderAddress?.city}
                onChange={(value: string) =>
                  this.handleFieldChange("senderAddress.city", value)
                }
              />
              <InputField
                label="zip"
                id="zip"
                value={invoice?.senderAddress?.zip}
                onChange={(value: string) =>
                  this.handleFieldChange("senderAddress.zip", value)
                }
              />
              <InputField
                label="Country"
                id="country"
                value={invoice?.senderAddress?.country}
                onChange={(value: string) =>
                  this.handleFieldChange("senderAddress.country", value)
                }
              />
            </div>
          </fieldset>
          <fieldset>
            <label className={styles.groupLabel}>Bill To</label>
            <InputField
              label="Client's Name"
              id="clientName"
              value={invoice?.clientName}
              onChange={(value: string) =>
                this.handleFieldChange("clientName", value)
              }
            />
            <InputField
              label="Client's Email"
              id="clientEmail"
              value={invoice?.clientEmail}
              onChange={(value: string) =>
                this.handleFieldChange("clientEmail", value)
              }
            />
            <InputField
              label="Street Address"
              id="clientStreetAddress"
              value={invoice?.clientAddress?.street}
              onChange={(value: string) =>
                this.handleFieldChange("clientAddress.street", value)
              }
            />
            <div className={styles.addressL2}>
              <InputField
                label="City"
                id="clientCity"
                value={invoice?.clientAddress?.city}
                onChange={(value: string) =>
                  this.handleFieldChange("clientAddress.city", value)
                }
              />
              <InputField
                label="zip"
                id="clientZip"
                value={invoice?.clientAddress?.zip}
                onChange={(value: string) =>
                  this.handleFieldChange("clientAddress.zip", value)
                }
              />
              <InputField
                label="Country"
                id="clientCountry"
                value={invoice?.clientAddress?.country}
                onChange={(value: string) =>
                  this.handleFieldChange("clientAddress.country", value)
                }
              />
            </div>
            <div className={styles.addressL3}>
              <InputField label="Invoice Date" id="clientsZip" value={""} />
              <div className={styles.paymentTermField}>
                <div className={styles.controlText}>
                  <label className={styles.fieldLabel}>Payment Terms</label>
                  <span className={styles.fieldError}>Can't be empty.</span>
                </div>

                <Dropdown
                  className={styles.paymentTermDropdown}
                  controlClassName={styles.paymentTermDropdown__control}
                  menuClassName={styles.paymentTermDropdown__menu}
                  options={PAYMENT_TERM_OPTIONS}
                  onChange={this.onSelectPaymentTerm}
                  placeholder="Select an option"
                />
              </div>
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
