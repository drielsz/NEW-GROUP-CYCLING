import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import Geocoder from "react-native-geocoding";
import * as Location from 'expo-location';
import SearchLocationMap from '../../components/SearchLocationMap'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    Back,
    LocationBox,
    LocationText,
    LocationTimeBox,
    LocationTimeText,
    LocationTimeTextSmall
  } from "./styles";

Geocoder.init("AIzaSyAV3UYYuWSpB2u2hOFL3KsR8P9XcRpgWlc");

import markerImage from '../../assets/marker.png'
import backImage from '../../assets/back.png'

import MapPointers from '../../components/MapPointers';
import Directions from '../../components/Directions';

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

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
        Location.installWebGeolocationPolyfill()
         navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
            const response =  Geocoder.from({ latitude, longitude });
            const address =  response.results[0].formatted_address;
            const location =  address.substring(0, address.indexOf(","));
             this.setState({
              location,
              region: {
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134
              }
            });
          },
          () => {},
          {
            timeout: 2000,
            enableHighAccuracy: true,
            maximumAge: 1000
          }
        );
      }

      handleLocationSelected = (data, { geometry }) => {
        const {
          location: { lat: latitude, lng: longitude }
        } = geometry;
    
        this.setState({
          destination: {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
            title: data.structured_formatting.main_text
          }
        });
    
    
      };
    
      getMyLocation = (data, { geometry }) => {
        this.setState({
          region: {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
            title: data.structured_formatting.main_text,
            latitudeDelta: 0.0134,
            longitudeDelta: 0.0134
          }
        });
    
    
      };
    
      handleBack = () => {
        this.setState({ destination: null, region: null });
      };
    render(){

        const {region, destination, duration, location} = this.state

        return(
            <View style={{flex:1}}>
                <MapView
                style={{flex:1}}
                region={this.state.region}
                showsUserLocation
                loadingEnabled
                ref={el => (this.mapView = el)}
                >
                    <MapPointers/>
                {destination && (
                    <Fragment>
                        <Directions
                            lineDashPattern={[0]}
                            origin={this.state.region}
                            destination={this.state.destination}
                            onReady={result => {
                                this.setState({duration: Math.floor(result.duration)})

                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding:{
                                        right: height * 0.050,
                                        left: height * 0.050,
                                        top: height * 0.050,
                                        bottom: height * 0.3
                                    }
                                })
                            }}
                        />
                        <Marker
                            coordinate={{ latitude: this.state.destination.latitude, longitude: this.state.destination.longitude }}
                            anchor={{ x: 0, y: 0 }}
                            image={markerImage}
                        >
                            <LocationBox>
                            <LocationText>{this.state.destination.title}</LocationText>
                            </LocationBox>
                        </Marker>
                        <Marker coordinate={this.state.region} anchor={{ x: 0, y: 0 }}>
                            <LocationBox>
                            <LocationTimeBox>
                                <LocationTimeText>{duration}</LocationTimeText>
                                <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                            </LocationTimeBox>
                            <LocationText>{location}</LocationText>
                            </LocationBox>
                        </Marker>
                    </Fragment>
                )}
                </MapView>

                {destination ? (
           <Fragment>
              <Back onPress={this.handleBack}>
              <Image source={backImage} />
              </Back>
              <ModalComponent pointers={{ origin: this.state.region, destination: this.state.destination}}/>
            </Fragment>
        ) : (
          <>

              <SearchLocationMap onLocationSelected={this.getMyLocation} vert={height * 0.06} fine={false} placeholder="Origem" />

              {region ? (
                <><>
                  <SearchLocationMap onLocationSelected={this.handleLocationSelected} vert={height * 0.06 * 2} fine={true} placeholder="Destino" />
                </><>

                </></>
                ) : (<View></View>)}

         </>

        )}
            </View>
        )
    }
}