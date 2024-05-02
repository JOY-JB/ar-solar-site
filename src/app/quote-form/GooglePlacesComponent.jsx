"use client";

import { defaultLatLng } from "@/Shared/DefaultData";
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const GooglePlacesComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const searchBox = useRef(null);
  const [latLng, setLatLng] = useState(defaultLatLng);

  const handlePlacesChanged = (e) => {
    const places = searchBox.current.getPlaces();

    if (places.length > 0) {
      const place = places[0];

      setLatLng({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("latLng", JSON.stringify(latLng));
  }, [latLng]);

  return (
    <>
      <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
        <StandaloneSearchBox
          onLoad={(ref) => (searchBox.current = ref)}
          onPlacesChanged={handlePlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for places"
            className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25 placeholder-white/50 text-center mb-4 outline-none"
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "800px" }}
          center={latLng}
          zoom={19}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default GooglePlacesComponent;