import mitt from 'mitt'

/**
 * Type definition for application events.
 * @typedef {Object} ApplicationEvents
 * @property {Object} 'filters:set' - Event for setting filters.
 * @property {string} 'filters:set'.type - The type of the filter.
 * @property {string|IFamily} 'filters:set'.value - The value of the filter.
 * @property {null} 'filters:reset' - Event for resetting filters.
 */
type ApplicationEvents = {
  'map:zoom': number
  'location:set': maplibregl.MapGeoJSONFeature
  'location:clear': undefined
}

export default defineNuxtPlugin(() => {
  // Create an emitter with the defined application events
  const emitter = mitt<ApplicationEvents>()

  return {
    provide: {
      /**
       * Emit an event.
       * @param {string} event - The event name.
       * @param {any} [payload] - The event payload.
       */
      event: emitter.emit,

      /**
       * Register a listener for an event.
       * @param {string} event - The event name.
       * @param {Function} callback - The callback function to handle the event.
       */
      listen: emitter.on,

      /**
       * Remove a listener for an event.
       * @param {string} event - The event name.
       * @param {Function} callback - The callback function to remove.
       */
      kill: emitter.off,
    },
  }
})
