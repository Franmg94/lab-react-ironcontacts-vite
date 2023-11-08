import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";


function App() {
  const [contactsList, setContactsList] = useState(contacts);

  const fiveContacts = contactsList.slice(0, 5);
  console.log(fiveContacts);

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table className="Table">
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emy</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={fiveContacts[0].pictureUrl} alt="First contact picture" />
            </td>
            <td>{fiveContacts[0].name} </td>
            <td>{Math.floor(fiveContacts[0].popularity)} </td>
            <td>{fiveContacts[0].wonOscar ? "🏆" : ""} </td>
            <td>{fiveContacts[0].wonEmmy ? "🌟" : ""} </td>
          </tr>
          <tr>
            <td>
              <img src={fiveContacts[1].pictureUrl} alt="Second contact picture" />
            </td>
            <td>{fiveContacts[1].name} </td>
            <td>{Math.floor(fiveContacts[1].popularity)} </td>
            <td>{fiveContacts[1].wonOscar ? "🏆" : ""} </td>
            <td>{fiveContacts[1].wonEmmy ? "🌟" : ""} </td>
            
          </tr>
          <tr>
            <td>
              <img src={fiveContacts[2].pictureUrl} alt="Third contact picture" />
            </td>
            <td>{fiveContacts[2].name} </td>
            <td>{Math.floor(fiveContacts[2].popularity)} </td>
            <td>{fiveContacts[2].wonOscar ? "🏆" : ""} </td>
            <td>{fiveContacts[2].wonEmmy ? "🌟" : ""} </td>
          </tr>
          <tr>
            <td>
              <img src={fiveContacts[3].pictureUrl} alt="Fourth contact picture" />
            </td>
            <td>{fiveContacts[3].name} </td>
            <td>{Math.floor(fiveContacts[3].popularity)} </td>
            <td>{fiveContacts[3].wonOscar ? "🏆" : ""} </td>
            <td>{fiveContacts[3].wonEmmy ? "🌟" : ""} </td>
          </tr>
          <tr>
            <td>
              <img src={fiveContacts[4].pictureUrl} alt="Fifth contact picture" />
            </td>
            <td>{fiveContacts[4].name} </td>
            <td>{Math.floor(fiveContacts[4].popularity)} </td>
            <td>{fiveContacts[4].wonOscar ? "🏆" : ""} </td>
            <td>{fiveContacts[4].wonEmmy ? "🌟" : ""} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
