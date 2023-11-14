import { useState } from 'react';
import './App.scss';


function App() {
  let [text, setText] = useState('')
  let [table, setTable] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }
  const handleText = (e) => {
    e.preventDefault()
    if (text) {
      const data = [...table, text]
      setTable(data)
    } else {
      alert('input bosdur')
    }

    setText(" ")
  }
  const remove = (e) => {
    e.preventDefault()
    e.target.parentNode.parentNode.remove()
  }
  return (
    <>
      {/* <div className="wrapper">
      <div className="card">
        <div className="image">
          <img src="https://www.hdcarwallpapers.com/walls/2023_tesla_model_3_4k-HD.jpg" alt="" />
        </div>
        <div className="card-text">
          <h1>Tesla</h1>
          <p>The Best Car </p>
          <p>Price: Infinity</p>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://www.hdcarwallpapers.com/walls/2023_tesla_model_3_4k-HD.jpg" alt="" />
        </div>
        <div className="card-text">
          <h1>Tesla</h1>
          <p>The Best Car </p>
          <p>Price: Infinity</p>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://www.hdcarwallpapers.com/walls/2023_tesla_model_3_4k-HD.jpg" alt="" />
        </div>
        <div className="card-text">
          <h1>Tesla</h1>
          <p>The Best Car </p>
          <p>Price: Infinity</p>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://www.hdcarwallpapers.com/walls/2023_tesla_model_3_4k-HD.jpg" alt="" />
        </div>
        <div className="card-text">
          <h1>Tesla</h1>
          <p>The Best Car </p>
          <p>Price: Infinity</p>
        </div>
      </div>
    </div> */}

      <form action="">
        <label htmlFor="">ToDoTest</label>
        <input type="text" onChange={handleChange} />
        <input type="submit" onClick={handleText} />
        <table>
          {table && table.map((item) => {
            return <tr>
              <td>{item}</td>
              <td><button onClick={remove}>X</button></td>
            </tr>
          })}
        </table>
      </form>



    </>
  );
}

export default App;
