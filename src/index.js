import React, {Component} from 'react';
import {render} from 'react-dom';
import championsList from './lol-champions.json';

// const lolClient = lol.client({
//   apiKey: '082dbc68-3edb-4ac3-9d02-59efc93d1d66',
//   cache: null
// });

class SearchButton extends React.Component {
  constructor(props){
    super(props);
    championsList.state = {name: "" };
  }

  buttonClicked() {
    fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
      .then((data) => {
        console.log(data.body.getReader().read().then(thing=>console.log(thing)));
      });
    // let name = document.getElementById('dropitdown').value;
    // for(let i = 0; i < championsList.length; i++) {
    //   if (championsList[i].name == name) {
    //     query = championsList[i].id;
    //     request = before + query + after;
    //     console.log(championsList[i].name);
    //     break;
    //   }
    // }

  }

  render() {
    console.log("It Works!!");
    return (
      <div>
        <select id="dropitdown">
          <option value="Ashe">Ashe</option>
          <option value="Caitlyn">Caitlyn</option>
          <option value="Ezreal">Ezreal</option>
          <option value="Kog'Maw">Kog'Maw</option>
          <option value="Missfortune">Miss Fortune</option>
          <option value="Sivir">Sivir</option>
          <option value="Tristana">Tristana</option>
          <option value="Twitch">Twitch</option>
          <option value="Vayne">Vayne</option>
        </select>
        <button className="inputs" onClick={this.buttonClicked}>Search Champions</button>
      </div>
    );
  }
}

render(<SearchButton/>, document.getElementById('ChampBox')
);
