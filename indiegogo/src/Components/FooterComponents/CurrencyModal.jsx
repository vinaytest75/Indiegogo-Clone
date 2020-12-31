import React from "react";

class CurrencyModal extends React.Component {
  render() {
    const { currencies, handleChange } = this.props;
    const { currency } = this.props;
    return (
      <>
        <h1>Currency Settings </h1>
        <p>
          Changing the currency will allow you to view estimates of the campaign
          goal and contribution amounts in the currency you choose.
        </p>
        <p>
          You will still be charged in the campaign’s original currency. The
          amount charged by your card issuer in your local currency may differ
          from our estimate, based on their exchange rate and any applicable
          fees.
        </p>
        <select name="currency" value={currency} onChange={handleChange}>
          {currencies.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </>
    );
  }
}

export { CurrencyModal };
