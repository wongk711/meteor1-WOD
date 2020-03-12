import React from 'react';
import TopMenu from '../components/TopMenu';
import FullWidthImage from '../components/FullWidthImage';
import FooterMenu from '../components/FooterMenu';

export default class ThreePeaks extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}
