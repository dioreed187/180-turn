'use strict';

/**
 * Local Storage Service for managing user data, locations, family circles, alerts, and settings.
 */
class LocalStorageService {
    /**
     * Set item in local storage.
     * @param {string} key - Key for the item.
     * @param {any} value - Value to be stored.
     */
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Get item from local storage.
     * @param {string} key - Key for the item.
     * @returns {any} - Parsed value from local storage.
     */
    getItem(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    /**
     * Remove item from local storage.
     * @param {string} key - Key for the item.
     */
    removeItem(key) {
        localStorage.removeItem(key);
    }

    /**
     * Clear all local storage items.
     */
    clear() {
        localStorage.clear();
    }

    /**
     * Manage user data.
     * @param {object} userData - User data object.
     */
    manageUserData(userData) {
        this.setItem('user_data', userData);
    }

    /**
     * Manage user locations.
     * @param {Array} locations - Array of locations.
     */
    manageLocations(locations) {
        this.setItem('user_locations', locations);
    }

    /**
     * Manage family circles.
     * @param {Array} familyCircles - Array of family circles.
     */
    manageFamilyCircles(familyCircles) {
        this.setItem('family_circles', familyCircles);
    }

    /**
     * Manage alerts.
     * @param {Array} alerts - Array of alerts.
     */
    manageAlerts(alerts) {
        this.setItem('user_alerts', alerts);
    }

    /**
     * Manage settings.
     * @param {object} settings - Settings object.
     */
    manageSettings(settings) {
        this.setItem('user_settings', settings);
    }

    /**
     * Get user data.
     * @returns {object} - Retrieved user data.
     */
    getUserData() {
        return this.getItem('user_data');
    }

    /**
     * Get user locations.
     * @returns {Array} - Retrieved user locations.
     */
    getLocations() {
        return this.getItem('user_locations');
    }

    /**
     * Get family circles.
     * @returns {Array} - Retrieved family circles.
     */
    getFamilyCircles() {
        return this.getItem('family_circles');
    }

    /**
     * Get alerts.
     * @returns {Array} - Retrieved alerts.
     */
    getAlerts() {
        return this.getItem('user_alerts');
    }

    /**
     * Get settings.
     * @returns {object} - Retrieved settings.
     */
    getSettings() {
        return this.getItem('user_settings');
    }
}

// Export the LocalStorageService class
export default new LocalStorageService();
