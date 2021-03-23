import React, { useState } from "react";
import styled from "@emotion/styled";
import { getYearDifference } from "../helper";

//styled div to form fields
const FormDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none; //replace the default browser of input select style
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  margin-top: 2rem;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;

  //Sass for hover
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem 0 1rem 0;
  width: 100%;
  text-align: center;
  margin: 0 0 2rem 0;
`;

//begin of the component
const InsuranceForm = () => {
  //form data objetc State
  const [data, HandleData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  //extracting State values from data State
  const { brand, year, plan } = data;

  //read the data form (when user submit it ) and put them in the data State
  const getFormData = (e) => {
    HandleData({
      ...data, //copy of the data state
      [e.target.name]: e.target.value, //put the form data inputs in the data State copy
    });
  };

  //error State to handle form validation error
  const [error, handleError] = useState(false);

  //handle form submit event
  const quoteInsurance = (e) => {
    e.preventDefault();

    //form validation, only empty fields for now
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      handleError(true);
      return;
    }
    //if previous valitadion is passed
    handleError(false);

    //calculate car's age to apply 3% of depreciation for every year, year base is 2000
    const carAge = getYearDifference(year);
    let yearBaseDep = 2000;

    //calculate 3 %  for year on depreciation, starting for the year 2000
    yearBaseDep -= (carAge * 3 * carAge) / 100;
  };

  return (
    <form onSubmit={quoteInsurance}>
      {error ? <Error>All fields are mandatory</Error> : null}
      <FormDiv>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getFormData}>
          <option value="">-- Select --</option>
          <option value="america">America</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
        </Select>
      </FormDiv>
      <FormDiv>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getFormData}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </FormDiv>

      <FormDiv>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getFormData}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={getFormData}
        />
        Full
      </FormDiv>
      <Button type="submit">Quote</Button>
    </form>
  );
};

export default InsuranceForm;
