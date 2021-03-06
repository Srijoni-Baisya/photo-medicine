prediction = "";


Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90,
    dest_height:280,
    dest_width:330
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version : ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kghOod_im/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = prediction;
    
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    console.log(utterThis);
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_med_name").innerHTML=results[0].label;

        //prediction = results[0].label;

        //speak();
        
        if(results[0].label=="Unienzyme"){
            prediction="The medicine is Unienzyme, which is a dietary supplement that promotes proper digestion by improving the digestion process in a balanced manner. It helps to treat indigestion, bloating, gas or any stomach discomfort.";
            document.getElementById("update_med").src="med1.png";
            speak();
        }
        if(results[0].label=="Gelusil"){
            prediction="The medicine is Gelusil, which is used to treat the symptoms of too much stomach acid such as stomach upset, heartburn and acid indigestion.";
            document.getElementById("update_med").src="med2.jpg";
            speak();
        }
        if(results[0].label=="Electral (ORS)"){
            prediction="The medicine is Electral, which is used to restore the electrolytes and body fluids which are lost due to dehydration during diarrhoea and vomiting or while exercising in hot and humid weather and other conditions where there is a loss of water and electrolytes. ";
            document.getElementById("update_med").src="med3.png";
            speak();
        }
        if(results[0].label=="O2"){
            prediction="The medicine is O2, which is used for the treatment of diarrhoea due to mixed infection in adults.";
            document.getElementById("update_med").src="med4.png";
            speak();
        }
        if(results[0].label=="Metrogyl 200"){
            prediction="The medicine is Metrogyl 200, which contains Metronidazole. It is an anti-infective medicine used against various bacteria nd parasites.";
            document.getElementById("update_med").src="med5.png";
            speak();
        }
        if(results[0].label=="Calpol 650"){
            prediction="The medicine is Calpol 650, which is used to relieve fever and mild-to-moderate pain. It is also used to get relief from headache, toothache, migraine and other painful conditions.";
            document.getElementById("update_med").src="med6.jpg";
            speak();
        }
        if(results[0].label=="Pan 40"){
            prediction="The medicine is Pan 40, which is used to treat stomach ulcers, gastroesophageal reflux disease and other acidity related problems.";
            document.getElementById("update_med").src="med7.jpg";
            speak();
        }
        if(results[0].label=="Bicozinc"){
            prediction="The medicine is Bicozinc, which provides support in vitamin and mineral deficiency.";
            document.getElementById("update_med").src="med8.png";
            speak();
        }
        if(results[0].label=="Metformin"){
            prediction="The medicine is Metformin, which is used to control high blood sugar in patients with type 2 diabetes.";
            document.getElementById("update_med").src="med9.jpg";
            speak();
        }
        if(results[0].label=="Metrogyl 400"){
            prediction="The medicine is Metrogyl 400, which is used to treat diarrhoea or dysentery due to parasitic infections such as amoebiasis.";
            document.getElementById("update_med").src="med10.jpg";
            speak();
        }            
      
    }
}