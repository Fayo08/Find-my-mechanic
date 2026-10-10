import { useEffect, useRef } from "react";
import * as L from "../../vendor/leaflet/leaflet.esm.js";
import "../../vendor/leaflet/leaflet.css";
import "./LocationsMap.scss";

// OpenStreetMap data with CARTO's Voyager style. CARTO needs a key; it is visible
// in the browser anyway, so restrict it to the site's domain in the CARTO dashboard.
const CARTO_KEY = import.meta.env.VITE_CARTO_KEY || "cb1_4g5y_1_afedbe3644b6e1d4770bb3b3";
const TILES = `https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${CARTO_KEY}`;
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// The demo is set in Edmonton, so the map opens there without asking for the visitor's location.
const CITY = "Edmonton, Alberta";
const HOME = [53.5461, -113.4938];

// Nearby garages, to show there is help around
const GARAGES = [
  [53.5532, -113.5165],
  [53.5405, -113.4777],
  [53.5592, -113.4699],
  [53.5333, -113.505],
  [53.5634, -113.5016],
];

const youIcon = L.divIcon({
  className: "map-you",
  html: "<span></span>",
  iconSize: [22, 22],
});

const garageIcon = L.divIcon({
  className: "map-garage",
  html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-5.6 5.6a1.4 1.4 0 0 0 2 2l5.6-5.6a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2z"/></svg>',
  iconSize: [28, 28],
});

const LocationsMap = ({ setCurrentLocation }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const box = mapRef.current;
    let alive = true;
    const map = L.map(box, {
      center: HOME,
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer(TILES, { maxZoom: 19 }).addTo(map);
    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.attribution({ position: "topright", prefix: false }).addAttribution(ATTRIBUTION).addTo(map);

    L.marker(HOME, { icon: youIcon, keyboard: false })
      .addTo(map)
      .bindTooltip(CITY, { permanent: true, direction: "top", offset: [0, -14], className: "map-label" });

    GARAGES.forEach((spot) => L.marker(spot, { icon: garageIcon, keyboard: false }).addTo(map));

    // Centre the pin in the part of the map the sheet doesn't cover:
    // above the sheet on phones, beside it from tablet up.
    const sheet = box.parentElement?.querySelector(":scope > :not(.map)");
    let userMoved = false;
    map.on("dragstart zoomstart", (e) => {
      if (e.originalEvent || e.type === "dragstart") userMoved = true;
    });
    const centre = () => {
      if (!alive || userMoved) return;
      map.invalidateSize();
      map.setView(HOME, map.getZoom(), { animate: false });
      if (!sheet) return;
      const m = box.getBoundingClientRect();
      const s = sheet.getBoundingClientRect();
      if (window.innerWidth < 768) map.panBy([0, (m.bottom - s.top) / 2], { animate: false });
      else map.panBy([-(s.right - m.left) / 2, 0], { animate: false });
    };
    centre();

    // Re-centre when the window or the sheet's content changes size, until the visitor moves the map
    const resize = new ResizeObserver(centre);
    resize.observe(box);
    if (sheet) resize.observe(sheet);

    setCurrentLocation?.(CITY);

    return () => {
      alive = false;
      resize.disconnect();
      map.remove();
    };
  }, [setCurrentLocation]);

  return <div className="map" ref={mapRef} aria-label={`Map of ${CITY}`} role="region" />;
};

export default LocationsMap;
