// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){

    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length > 0){
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song)
    });

  },

  playFirst: function(){
    this.at(0).play();
  },

});




// this.on('enqueue', function(song){
//   this.add(song);
//   debugger;
//   if(this.length === 1){
//     this.playFirst();
//   }
// });
