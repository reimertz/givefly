var Sound = Backbone.View.extend({
 
    //tagName:  "li 10mb 25mn 100mb 1GB",
 
    events: {
      "click .play"   : "doPlay",
    },
 
    initialize: function(dom) {
      this.tagName =  dom;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },
 
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    doPlay: function() {
      this.model.set('isPlaying', true);
    }
});