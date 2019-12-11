import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  useGoatEvent = (e) => {
    const { useGoat, goat } = this.props;
    e.preventDefault();
    useGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card col-3 goatCard">
        <img src={goat.imgUrl} className="card-img-top" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          {
            (goat.isBusy)
              ? (<button className="btn btn-success" onClick={this.freeGoatEvent}>Free Me</button>)
              : (<button className="btn btn-danger" onClick={this.useGoatEvent}>Use Goat</button>)
          }
        </div>
      </div>
    );
  }
}

export default Goat;
