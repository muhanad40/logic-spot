import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  background: #F8F8F8;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 8px;

  &:after {
    content: '+';
    display: block;
    margin-left: 16px;
    font-size: 20px;
    line-height: 1;
    font-weight: 500;
    color: #5F6367;
  }
`;
  
const Content = styled.div`
  padding: 16px;
  margin-bottom: 12px;
`;

const Accordion = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  const toggle = () => {
    setShowContent(!showContent);
  }

  return (
    <>
      <Title data-test-role="accordion-title" onClick={toggle}>{title}</Title>
      {showContent &&
        <Content data-test-role="accordion-content">{content}</Content>
      }
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;