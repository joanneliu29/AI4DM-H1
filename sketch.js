// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/WB0zBXNEQ/';

// Video
let video;
let cal;

// To store the classification
let label = "Waiting for the TM model...";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();


  // Start classifying
  classifier.classifyStart(video, gotResult);
}

function draw() {
  background(0);
  // Draw the video
  image(video, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classifyStart(video, gotResult);
}

// When we get a result
function gotResult(results) {
  //console.log(results[0]);
  
  if (results[0].label == "Banana") {
    cal = "105";
    //console.log(cal);
  } else if (results[0].label == "Pear") {
    cal = "102";
    //console.log(cal);
  } else if (results[0].label == "Orange") {
    cal = "45";
    //console.log(cal);
  } else if (results[0].label == "Apple") {
    cal = "95";
    //console.log(cal);
  } else if (results[0].label == "Plum") {
    cal = "30";
    //console.log(cal);
  } else if (results[0].label == "Blueberry") {
    cal = "2";
    //console.log(cal);
  } else {
    cal = "Unknown";
  }

  label = results[0].label + " - " + cal + " calories";
}