import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

getGoatCount = () => {
  const { goats } = this.props;
  return goats.filter((g) => !g.isBusy).length;
}

render() {
  return (
      <h4>{this.getGoatCount()} goats available</h4>
  );
}
}

export default AvailableGoats;
