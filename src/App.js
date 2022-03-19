import './App.css';
import { Banner } from './Banner';
import { Nav } from './Nav';
import { requests } from './requests';
import { Row } from './Row';

function App() {

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}></Row>
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
