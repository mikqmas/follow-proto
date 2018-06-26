import React from 'react';
import Result from './Result';
import '../styles/ListResults.css'

class ListResults extends React.PureComponent {
  state = {
    data: []
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(this.handleErrors)
    .then(res=>res.json())
    .then(json=>this.setState({data: json}))
    .catch(error => console.log(error));
  }

  handleErrors(resp) {
    if(!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }

  render() {
    return (
      <div className="list-results">
        {
          this.state.data.map(data=><Result key={data.userId} data={data}/>)
        }
      </div>
    )
  }
}

export default ListResults;
