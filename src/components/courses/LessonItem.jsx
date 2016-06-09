import React from 'react';
import { Link } from 'react-router';
import { ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

export default class LessonItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem twoLine className="lessons-item">
        <ListItemContent
          avatar="video_library"
          subtitle={this.props.lesson.duration}>
          {this.props.lesson.title}
        </ListItemContent>
        <ListItemAction>
          <Icon name="keyboard_arrow_right" />
        </ListItemAction>
      </ListItem>
    );
  }
}
