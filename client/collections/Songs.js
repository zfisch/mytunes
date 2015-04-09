// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  iniitialize: function(){
    this.on('ended', function(song){
      this.incrementPlaycount(song);
    });
  },

  incrementPlaycount: function(song){
    debugger;
    song.set('playCount', song.get('playCount') + 1);
  }

});
