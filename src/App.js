import SearchContainer from "./modules/searchPage/components/Container";
import {UnsplashState} from "./context/unsplash/UnsplashState";

function App() {
  return (
      <UnsplashState>
        <SearchContainer />
      </UnsplashState>
  );
}

export default App;
