import React, { Component } from "react";

export class RandomUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      person: null,
    };
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";

    fetch(url)
      .then((res) => {
        //throw new Error('error from then block');
        res.json().then((data) => {
          console.log(data);
          this.setState({
            loading: false,
            person: data,
          });
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          person: null,
        });
        console.log("Api Fail", err);
      });
  }
  render() {
    if (this.state.loading) {
      return <div>Loading.....</div>;
    }
    if (!this.state.person) {
      return <div>Something went Wrong</div>;
    }
    return (
      <div>
        {
          this.state.person.map((p, index) => (
            <div>
              <div key={index}>{p.title}</div>
              <div key={p.id}>{p.url}</div>
              <div>
                <img src={p.thumbnailUrl} />
              </div>
            </div>
          ))
          //   <div>
          //     <div>{this.state.person.title}</div>
          //      <div>{this.state.person.url}</div>
          //     <div><img src={this.state.person.thumbnailUrl}/> </div>
          //     <div>{this.state.person.phone}</div>
          //     <div><img src={this.state.person.picture.large}/></div>
          //   </div>
        }
      </div>
    );
  }
}

export default RandomUser;
