import Header from "./components/Header";
import styled from "@emotion/styled";
import InsuranceForm from "./components/InsuranceForm";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title="Car Insurance Quote" />

      <FormContainer>
        <InsuranceForm />
      </FormContainer>
    </Container>
  );
}

export default App;
