import React from 'react';
import { FalconClientMock } from '@deity/falcon-client/test-utils';
import { shallow } from 'enzyme';

import Accordion from ".";

describe('Accordion', () => {
  it('should render correctly', () => {
    expect(shallow(<Accordion title="Accordion title..." content="Content..." />)).toMatchSnapshot();
  });

  it('should toggle content visibility when title is clicked', () => {
    const component = shallow(<Accordion title="Test title" content="Test content..." />);

    component.find('[data-test-role="accordion-title"]').simulate('click');
    expect(component.find('[data-test-role="accordion-content"]').exists()).toBe(true);
    component.find('[data-test-role="accordion-title"]').simulate('click');
    expect(component.find('[data-test-role="accordion-content"]').exists()).toBe(false);
  });
});
