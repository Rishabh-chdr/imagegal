import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
const key = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState('');
  
  const handlesearchsubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${key}`)
      .then((res) => res.json())
      .then((data) => {console.log(data);})
      .catch((err) => {
        console.log(err);
        })
    setWord('');
  }
 

  return (
    <div >
      <Header />
      <Search word={word} setWord = {setWord} handlesubmit={handlesearchsubmit}/>
    </div>
  );
}

export default App;
