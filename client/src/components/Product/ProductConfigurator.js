import React from 'react';

/**
 * ProductConfigurator takes care of handling data relaed to product options available to be selected before adding to cart.
 * Currently only configurable options are supported, in the future that class will handle bundled products as well as custom product attributes.
 */
export class ProductConfigurator extends React.Component {
  state = {
    selectedConfigurableOptions: {}
  };

  /**
   * Handles change of configurable product option
   * @param {string} name - name of the option
   * @param {any} value - value of changed option
   */
  handleConfigurationOptionChange(name, value) {
    this.setState(
      (state) => ({
        selectedConfigurableOptions: {
          ...state.selectedConfigurableOptions,
          [name]: value
        }
      }),
      () => {
        // when state is set then update form manager
        const configurableOptions = Object.entries(this.state.selectedConfigurableOptions).map(item => ({
          optionId: parseInt(item[0], 10),
          value: parseInt(item[1], 10)
        }));
        this.props.onChange('configurableOptions', configurableOptions);
      }
    );
  }

  /**
   * Handler for all configuration changes, based on the type invokes proper type handler
   * @param {OptionType} type - type of the change
   * @param {HandleChangeParam} ev - change data
   */
  handleProductConfigurationChange = (type, ev) => {
    const { name, value } = ev.target;

    if (type === 'configurableOption') {
      this.handleConfigurationOptionChange(name, value);
    }
  };

  /**
   * Checks if passed value is selected.
   * @param {OptionType} type - type of the option to check
   * @param {string} name - name of the option to check
   * @param {any} value - value of the option to check
   * @returns {boolean} true when option with passed name has passed value
   */
  isValueSelected = (type, name, value) => {
    if (type === 'configurableOption') {
      return this.state.selectedConfigurableOptions.get(name) === value;
    }
    return false;
  };

  render() {
    return this.props.children({
      handleProductConfigurationChange: this.handleProductConfigurationChange,
      isValueSelected: this.isValueSelected
    });
  }
}
