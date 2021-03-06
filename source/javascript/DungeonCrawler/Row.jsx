// React.
import React from 'react';

// Components.
import Cell from './Cell.jsx';

////////////////////////////////////////////////////////////////////////////////
// Component definition
////////////////////////////////////////////////////////////////////////////////
class Row extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Component constructor.
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    super();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Component render.
  //////////////////////////////////////////////////////////////////////////////
  render() {

    // Create <Cell/> components based on the number of columns.
    var cells = [];
    for(var i=0; i<this.props.rowData.length; i++) {
      cells.push(
        <Cell
          key={i}
          contents={this.props.rowData[i]}
          />
      );
    }

    return (
      <div className="row">
        {cells}
      </div>
    )
  }
}

export default Row;
