import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";

function App() {

  return (
    <>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            <DisplayCounter/>
            <Controls/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
