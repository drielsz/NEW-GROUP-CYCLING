import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location'

import Routes from '../../../src/routes';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null
        }
    }

    componentDidMount() {
        GetLocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            })
        }, error => this.setState({error: error.message}),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        )
    }


    render(){
        return(
            <MapView
            style={{flex:1}}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
              <Marker coordinate={this.state}/>
          </MapView>
        )
    }
}