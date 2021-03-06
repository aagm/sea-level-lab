/**
 * The router module.
 *
 * Router handles app routing and URL parameters and updates Presenter.
 *
 * @return singleton instance of Router class (extends Backbone.Router).
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'gmap',
  'mps',
  'views/MapView',
  'views/FilterNavView',
  'views/LayersNavView'
], function($, _, Backbone, gmap, mps, MapView, FilterNavView, LayersNavView) {

  'use strict';

  var Router = Backbone.Router.extend({

    routes: {
      '*path': 'map'
    },

    map: function() {
      gmap.init(_.bind(function() {
        if (!this.mapView) {
          this.mapView = new MapView();
          this.filterNavView = new FilterNavView();
          this.layersNavView = new LayersNavView();
        }
        // Initialize sf layer
        mps.publish('map/toggle-layer', ['sf']);
        mps.publish('filter/change', [{'5m': true}]);
      }, this));
    }
  });

  var router = new Router();

  return router;

});
