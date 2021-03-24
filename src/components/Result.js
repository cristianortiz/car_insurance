import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const InsuranceResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const InsuranceText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ insuranceQuote }) => {
  return insuranceQuote === 0 ? (
    <Message>Choose brand, car year, and type of insurance plan</Message>
  ) : (
    <InsuranceResult>
      <TransitionGroup component="span" className="insuranceText">
        <CSSTransition
          classNames="insuranceText"
          key={insuranceQuote}
          timeout={{ enter: 500, exit: 500 }}
        >
          <InsuranceText>
            Total Insurance Quote : $ <span>{insuranceQuote}</span>
          </InsuranceText>
        </CSSTransition>
      </TransitionGroup>
    </InsuranceResult>
  );
};
Result.propTypes = {
  insuranceQuote: PropTypes.number.isRequired,
};
export default Result;
