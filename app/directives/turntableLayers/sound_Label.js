function addSoundWaveSlider(stage, layer, params) {

/*  var soundWaveSlider = new Konva.Layer();*/

   var group = new Konva.Group({

        x: 0,
        y: 0

   });

   var soundWaveEqulizer = new Konva.Image ({

        x: 100,
        y: 400,
        image: params.sound_wave,
        width: 400,
        height: 30

   });

    var soundWaveControl = new Konva.Image({

        x: 97,
        y: 443,
        image: params.sound_wave_control,
        width: 405,
        height: 8,

    });



    var soundWaveButton = new Konva.Image({

      x: 90,
      y: 437,
      image: params.sound_wave_cont_btn,
      width: 20,
      height: 20,
      offset: {
        x:0,
        y:0

      },

      draggable: true,

      dragS_WaveBtn: function (pos){

           var xPos = pos.x;

           if (xPos <= 120)
                xPos = 120;

           if (xPos >= 405)
                xPos = 405;


           return {

               x: xPos,
               y: this.getAbsolutePosition().y
           }
        }
    });

    group.add(soundWaveControl);
    group.add(soundWaveButton);

    group.add(soundWaveEqulizer);

    stage.add(group);
/*
    soundWaveSlider.add(group);
    stage.add(soundWaveSlider);
*/

}
