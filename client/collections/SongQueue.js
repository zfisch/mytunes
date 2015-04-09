// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('ended', function(song){
      this.playNext(song);
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

  playNext: function(song){
    debugger;
    this.remove(song);
    if(this.length > 0){
      this.playFirst();
    }
  },

  dequeueSong: function(song){
    if(this.length > 1){
      this.remove(song);
    }
  }

});
