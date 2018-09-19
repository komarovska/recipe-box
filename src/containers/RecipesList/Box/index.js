import React, { Component } from 'react';

import { Title, List } from '../styles';

import formDefault from '../actions';

class Box extends Component {
  componentDidMount() {
    formDefault();
  }

  render() {
    return (
      <div className="row">
        <Title>
                    Recipe Box
        </Title>
        <List className="col-sm-offset-2 col-sm-8">

          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>

        </List>

      </div>
    );
  }
}

export default Box;
