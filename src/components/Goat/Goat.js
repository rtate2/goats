import React from 'react';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;

    return(
      <div className="card col-3">
        <img src={goat.imgUrl} className="card-img-top" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
