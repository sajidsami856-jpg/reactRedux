import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import DisplayCounter from "./Components/DisplayCounter";

function App() {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayCounter/>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
