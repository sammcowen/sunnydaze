
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Sections/AboutMe/AboutMe';
import MyWork from './Sections/MyWork/MyWork';
import ContactMe from './Sections/ContactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <Header/>
     <AboutMe/>
     <MyWork/>
     <ContactMe/>
     
     
    </div>
  );
}

export default App;
