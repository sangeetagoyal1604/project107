Webcam.set({
    image_format:'png',
    height:350,
   width:300,
   png_quality:90
   });
   Webcam.attach(document.getElementById("camera"));
   function imagecapture() {
 Webcam.snap(function (url) {
document.getElementById("result").innerHTML="<img id='photo' src="+url+">";
       });
   }
   classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ERgh82vdo/model.json',modelloaded);
   function modelloaded() {
       console.log("modelloaded");
   }
   function speak() {
    var sync=window.speechSynthesis;
    var speak1="first prediction is "+p1;
    var speak2="second prediction is "+p2;
    var utter=new SpeechSynthesisUtterance(speak1+speak2);
    sync.speak(utter);
   }