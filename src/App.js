import "./App.css";
import Row from "./components/Row";
import requests from "./utilities/requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner></Banner>
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isNetflixOriginal={true}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentries" fetchUrl={requests.fetchDocumantaries}></Row>
    </div>
  );
}

export default App;
