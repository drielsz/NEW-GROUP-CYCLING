import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady, waypoints }) => (
    <MapViewDirections
      lineDashPattern={[0]}
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyDe-rhGVhON8J3fYaMSyOWflh71t8NNt44"
      strokeWidth={3}
      strokeColor="#0091E2"
      precision='high'
      mode='BICYCLING'
      language='pt-br'
      />
  );
  
  export default Directions;