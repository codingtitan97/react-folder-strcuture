// LocationSearch.js
import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 37.7749,
    lng: -122.4194,
};

const LocationSearch = () => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedPlaceLatLng, setSelectedPlaceLatLng] = useState(center);

    const inputRef = useRef(null);

    const onPlaceChanged = () => {
        if (inputRef.current && inputRef.current.value) {
            const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

            placesService.findPlaceFromQuery(
                {
                    query: inputRef.current.value,
                    fields: ['geometry'],
                },
                (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        const place = results[0];
                        setSelectedPlace(inputRef.current.value);
                        setSelectedPlaceLatLng({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                        });
                        console.log('Place changed:', inputRef.current.value);
                        console.log('Selected place LatLng:', {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                        });
                    }
                }
            );
        }
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAczB1_9C0dgfYS6iW4HTcVF0Vs8lWYVxc"
            libraries={['places']}
        >
            <StandaloneSearchBox onPlacesChanged={onPlaceChanged}>
                <input
                    type="text"
                    placeholder="Enter location"
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `240px`,
                        height: `32px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                    }}
                    ref={inputRef}
                />
            </StandaloneSearchBox>
            <GoogleMap mapContainerStyle={containerStyle} center={selectedPlaceLatLng} zoom={13}>
            </GoogleMap>
        </LoadScript>
    );
};

export default LocationSearch;
