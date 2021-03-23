import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import InsuranceForm from "./components/InsuranceForm";
import Recap from "./components/Recap";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [recap, handleRecap] = useState({
    insuranceQuote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });
  //values of the procesed form to passing to Recap component, if there are empty then Recap component doesn't show
  const { data } = recap;
  return (
    <Container>
      <Header title="Car Insurance Quote" />

      <FormContainer>
        <InsuranceForm handleRecap={handleRecap} />
        <Recap data={data} />
      </FormContainer>
    </Container>
  );
}

export default App;
