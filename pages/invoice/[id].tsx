import React, { Component } from 'react'
import styles from "./invoice.module.scss";

interface Props {
    
}
interface State {
    
}

export default class Invoice extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={styles.invoiceView}>
                Hello
            </div>
        )
    }
}
