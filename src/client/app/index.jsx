import 'react-toolbox/lib/commons.scss';
import React from 'react';
import {render} from 'react-dom';
import './styles.scss';

import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {

  render() {
    var components = [];
    for (var i = 0; i < 10; i++) {
      components.push(<AwesomeComponent key={i}/>);
    }

    return (
      <div>
        <h3>Hello World!</h3>
          {components}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
