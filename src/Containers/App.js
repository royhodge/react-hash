import React, { Component } from 'react';



// import dom from '../dom/dom';
import Sidenav from './Sidenav';
import Topnav from '../Components/Topnav';
import ContentCard from '../Components/Card';
// import ResultsDisplay from './ResultsDisplay';

import '../CSS/App.css';
import '../CSS/bootstrap/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: [],
      data: props.props.data,
      user: props.props.user,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  complicatedTagSearch(event) {
    let tags = [];
    if (event.keyCode === 32) {
      tags.push(event.target.value);
      return;
    }
    this.handleChange(event)
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'tagSearch':
        var res = this.state.data.filter(file => file.Tags.includes(event.target.value))
        this.setState({
          query: res
        })
        break;
      default:       
        res = this.state.data.filter(val => val.Filename ? val.Filename.toLowerCase().includes(event.target.value) : val.Name.toLowerCase().includes(event.target.value))
        this.setState({
          query: res
        })
        break;
    }
  }

  render() {    
    return (
      <React.Fragment>
        <Sidenav />
        <div id='hashboard' style={{ width: '100vw' }}>
          <div className="topNav nav navbar bg-dark text-white shadow-lg">
            <Topnav.TopLeft />
            <input
              id='nameSearch'
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Search names' />
            <input
              id='tagSearch'
              type="text"
              value={this.state.tags}
              onChange={this.handleChange}
              placeholder='Search tags' />
            <Topnav.TopRight />
          </div>

          <div id='results-display'>
            <ul className="container bg-light d-flex flex-column align-items-center">
              {this.state.query.map((item, index) => {
                return (<ContentCard key={Math.random()}  data={item} index={index} />)
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    console.log('Mount')
    if (this.state.user === null) {
      document.getElementById('userNameBtn').textContent = 'user unknown'
      this.setState({ user: 'user unknown' })
    }

  }

}

export default App;
