import './App.css'
import { Header } from "../Header/Header";
import {Route} from 'react-router-dom';
import TrainingPageContainer from "../Pages/TrainingPage/TrainingPageContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/training">
        <TrainingPageContainer />
      </Route>

    </div>
  );
}

export default App;
