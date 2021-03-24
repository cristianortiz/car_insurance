import React from "react";
import styled from "@emotion/styled";
import { capitalize } from "../helper";
import PropTypes from "prop-types";

const RecapContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Recap = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <RecapContainer>
      <h2>Insurance Quote Details</h2>
      <ul>
        <li>Brand: {capitalize(brand)}</li>
        <li>Car Year: {capitalize(year)}</li>
        <li>Plan: {capitalize(plan)}</li>
      </ul>
    </RecapContainer>
  );
};

//useState data object from app component
Recap.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Recap;
