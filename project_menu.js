// import {axios} from 'axios'

// require 'Axios';

// 'use strict';


const e = React.createElement;

var projects= axios.get("https://ancient-lake-82907.herokuapp.com/api/repos")


class ProjectMenu extends React.Component {
//   constructor(props) {
//     // super(props);
//     // this.state = { liked: false };
//   }


  render() {
    console.log(projects)

    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}


const domContainer = document.querySelector('#project_menu');
ReactDOM.render(e(ProjectMenu), domContainer);