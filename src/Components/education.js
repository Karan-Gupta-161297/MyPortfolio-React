import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ color: 'darkgoldenrod' }}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px', color: '#b92b27' }}>{this.props.schoolName}</h4>
          <p style={{ color: 'antiquewhite' }}>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;