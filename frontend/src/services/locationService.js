// locationService.js

class LocationService {
    constructor() {
        this.locationHistory = [];
        this.currentLocation = null;
        this.isTracking = false;
    }

    // Initializes geolocation tracking
    initialize() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(this));
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    // Set current location
    setCurrentLocation(position) {
        this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: position.timestamp
        };
        this.locationHistory.push(this.currentLocation);
    }

    // Start tracking location
    startTracking() {
        if ('geolocation' in navigator) {
            this.isTracking = true;
            this.trackPosition();
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    // Track position at intervals
    trackPosition() {
        if (this.isTracking) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setCurrentLocation(position);
                setTimeout(() => this.trackPosition(), 5000); // Update every 5 seconds
            });
        }
    }

    // Stop tracking location
    stopTracking() {
        this.isTracking = false;
    }

    // Get location history
    getLocationHistory() {
        return this.locationHistory;
    }

    // Get the current location
    getCurrentLocation() {
        return this.currentLocation;
    }
}

export default new LocationService();
