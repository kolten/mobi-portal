import React from 'react';
import { Grid, Cell, List } from 'react-mdl';

import LessonItem from './LessonItem.jsx';

export default class Lessons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Cell col={2} hideTablet></Cell>
        <Cell shadow={4} col={8}>
          <List>
            {this.props.items.map((lesson, index) => (
              <LessonItem key={index} lesson={lesson} />
            ))}
          </List>
        </Cell>
        <Cell col={2} hideTablet></Cell>
      </Grid>
    );
  }
}
