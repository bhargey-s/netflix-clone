import './App.css';
import Banner from './Components/Banner';
import Row from './Components/Row';
import Nav from './Nav';
import requests from './request'

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav></Nav>
      {/* Banner  */}
      <Banner></Banner>
      {/* Rows */}
      {requests.map(request => {
        if (request.title == "NETFLIX ORIGINALS")
          return (
            <Row
              key={request.id}
              title={request.title}
              fetchUrl={request.fetch}
              isLargeRow>
            </Row>
          )
        else
          return (
            <Row
              key={request.id}
              title={request.title}
              fetchUrl={request.fetch}>
            </Row>
          )
      })}
    </div>
  );
}

export default App;
