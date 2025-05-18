import mapy from './ParkinarodowePL.png';
import './App.css';
import Guess from './Guess';

function App() {
  return (
    <div className="App">
      <img float="left" src={mapy}/>
      <Guess rar="blue" name="Słowiński" top="190px" left = "310px"></Guess>
      <Guess rar="tlue" name="Woliński" top="290px" left = "70px"></Guess>
      <Guess rar="blue" name="Bory Tucholskie" top="290px" left = "310px"></Guess>
      <Guess rar="blue" name="Wigierski" top="260px" left = "710px"></Guess>
      <Guess rar="blue" name="Biebrzański" top="300px" left = "710px"></Guess>
      <Guess rar="blue" name="Drawieński" top="450px" left = "190px"></Guess>
      <Guess rar="blue" name="Ujście Warty" top="500px" left = "100px"></Guess>
      <Guess rar="blue" name="Wielkopolski" top="540px" left = "290px"></Guess>
      <Guess rar="blue" name="Narwiański" top="430px" left = "670px"></Guess>
      <Guess rar="blue" name="Białowieski" top="480px" left = "820px"></Guess>
      <Guess rar="blue" name="Kampinoski" top="510px" left = "560px"></Guess>
      <Guess rar="blue" name="Karkonoski" top="750px" left = "110px"></Guess>
      <Guess rar="blue" name="Poleski" top="690px" left = "760px"></Guess>
      <Guess rar="blue" name="Świętokrzyski" top="790px" left = "600px"></Guess>
      <Guess rar="blue" name="Roztoczański" top="770px" left = "800px"></Guess>
      <Guess rar="blue" name="Gór Stołowych" top="850px" left = "160px"></Guess>
      <Guess rar="blue" name="Ojcowski" top="900px" left = "490px"></Guess>
      <Guess rar="blue" name="Babiogórski" top="960px" left = "360px"></Guess>
      <Guess rar="blue" name="Gorczański" top="950px" left = "550px"></Guess>
      <Guess rar="blue" name="Magurski" top="960px" left = "740px"></Guess>
      <Guess rar="blue" name="Bieszczadzki" top="1000px" left = "780px"></Guess>
      <Guess rar="blue" name="Pieniński" top="1010px" left = "615px"></Guess>
      <Guess rar="blue" name="Tetrzański" top="1050px" left = "520px"></Guess>
    </div>
  );
}

export default App;
