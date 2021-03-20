import React from "react";
import styled from "@emotion/styled";

const InsuranceForm = () => {
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
    -webkit-appearance: none; //replace the default browser select style
  `;

  const InputRadio = styled.input`
    margin: 0 1rem;
  `;

  return (
    <form>
      <FormDiv>
        <Label>Brand</Label>
        <Select>
          <option value="">-- Select --</option>
          <option value="america">America</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
        </Select>
      </FormDiv>
      <FormDiv>
        <Label>Year</Label>
        <Select>
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
        <InputRadio type="radio" name="plan" value="basic" />
        Basic
        <InputRadio type="radio" name="plan" value="full" />
        Full
      </FormDiv>
      <button type="button">Quote</button>
    </form>
  );
};

export default InsuranceForm;
