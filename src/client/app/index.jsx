import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {

  render() {
    var components = [];
    for (let i = 0; i < 10; i++) {
      components.push(<AwesomeComponent key={i}/>);
    }

    return (
      <div>
        <p>Hello World!</p>
        {components}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
