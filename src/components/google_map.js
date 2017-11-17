import React, {Component} from 'react';
export default class GoogleMap extends Component{
  //lifecycle method
  componentDidMount(){
    //create a google map once the component is rendered on the screen
    //this is how we make third-party lib work with react
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat:this.props.lat,
        lng:this. props.lon
      }
    });
  }
  render(){
    //this.refs.map
    return <div ref="map" />
  }
}
