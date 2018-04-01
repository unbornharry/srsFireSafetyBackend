import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const mapStyle = {
    width: '40vw',
    minWidth: '400px',
    height: '350px',
    display: 'inline-block',
    itemAlign: 'right',
};

class googleMap extends Component {
  static defaultProps = {
    center: {lat: 11.040455, lng: 76.9384},
    zoom: 13
  };

  render() {
    return (
    <div style={mapStyle}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBh-Rw5_aJ3SRzaaT2Z08ilMBxxLanTHy4" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
      >
      </GoogleMapReact>
      </div>
    );
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: {lat: 11.040455, lng: 76.9384},
      map,
      title: 'SRS Enterprises'
    });
    return marker;
  }
}

export default googleMap;