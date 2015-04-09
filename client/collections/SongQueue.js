// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){

    this.on('ended', this.playNext);

    this.on('dequeue', function(song){
      this.remove(song)
    });

  },

  playFirst: function(){
    this.at(0).play();
  },

  playNext: function(){
    this.remove(this.at(0));
    if(this.length > 0){
      this.playFirst();
    }
  }

});




// this.on('enqueue', function(song){
//   this.add(song);
//   if(this.length === 1){
//     this.playFirst();
//   }
// });
