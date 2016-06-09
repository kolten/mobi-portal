import React from 'react';

import Lessons from './Lessons.jsx';

export default class ViewCourse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        id: 1,
        title: 'Intro to Android',
        duration: '15:33'
      },
      {
        id: 2,
        title: 'Learning Layouts',
        duration: '15:33'
      },
      {
        id: 3,
        title: 'XML to Code',
        duration: '15:33'
      },
      {
        id: 4,
        title: 'Make some toast!',
        duration: '15:33'
      },
      {
        id: 5,
        title: 'Firebase',
        duration: '15:33'
      },
      {
        id: 6,
        title: 'Splice with React',
        duration: '17:38'
      }
    ];

    return (
      <div>
        <h3>View Course</h3>
        <Lessons
          items={items} />
      </div>
    );
  }
}
