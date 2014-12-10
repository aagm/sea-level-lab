
define([
  'underscore',
  'd3',
  'layers/CanvasLayer'
], function(_, d3, CanvasLayer) {

  'use strict';

  var SFLayer = CanvasLayer.extend({

    init: function() {
      this._super();
      this.name = 'sf';
      this.urlTemplate = 'https://api.tiles.mapbox.com/v4/darkit.SF/%z/%x/%y.png?access_token=pk.eyJ1IjoiZGFya2l0IiwiYSI6IkhtblZxN2MifQ.4Se0dQvGFVxnnCrzPkoz3g';
    },
  
    // this.params have the filter params (sea meters);
    filterTileImgdata: function(imgdata, w, h, z) {
      console.log(this.params);
    }

  });

  return SFLayer;

});
