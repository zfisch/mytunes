// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set({playCount: 0});
  },

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this)
  },

  ended: function(){
    debugger;
    this.trigger('ended', this);
  },

});
