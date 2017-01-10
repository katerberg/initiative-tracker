import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {theme} from './AwesomeComponent.scss';

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    console.log(theme);
    return (
        <div>
        <Card theme={theme}>
          <CardTitle
            title="Likes"
            subtitle={this.state.likesCount + ''}
          />
          <CardActions>
            <Button label="Like Me" flat primary onClick={this.onLike}/>
          </CardActions>
        </Card>
        </div>
    );
  }
}

export default AwesomeComponent;
