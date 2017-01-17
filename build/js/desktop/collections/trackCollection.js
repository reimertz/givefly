  var TrackCollection = Backbone.Collection.extend({
 
    model: Track,
 
    isPlaying: function() {
      return this.contains({playing: true});
    }

    
  });