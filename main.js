

const init = () => {
  // The number of bars that should be displayed
  const NBR_OF_BARS = 3;

// Get the audio element tag
  const audio = document.querySelector("audio");

// Create an audio context
  const ctx = new AudioContext();

// Create an audio source
  const audioSource = ctx.createMediaElementSource(audio);

// Create an audio analyzer
  const analyzer = ctx.createAnalyser();

// Connect the source, to the analyzer, and then back the the context's destination
  audioSource.connect(analyzer);
  audioSource.connect(ctx.destination);

  // Print the analyze frequencies
  const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
  analyzer.getByteFrequencyData(frequencyData);
  console.log("frequencyData", frequencyData);

  // Get the visualizer container
  const visualizerContainer = document.querySelector(".visualizer-container");

  // Create a set of pre-defined bars
  for (let i = 0; i < NBR_OF_BARS; i++) {

    const bar = document.createElement("DIV");
    bar.setAttribute("id", "bar" + i);
    bar.setAttribute("class", "visualizer-container__bar");
    visualizerContainer.appendChild(bar);

  }

  // This function has the task to adjust the bar heights according to the frequency data
  const renderFrame = () => {

    // Update our frequency data array with the latest frequency data
    analyzer.getByteFrequencyData(frequencyData);

    for (let i = 0; i < NBR_OF_BARS; i++) {

      // Since the frequency data array is 1024 in length, we don't want to fetch
      // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
      const index = (i + 10) * 2;
      // fd is a frequency value between 0 and 255
      const fd = frequencyData[index];

      // Fetch the bar DIV element
      const bar = document.querySelector("#bar" + i);
      if (!bar) {
        continue;
      }

      // If fd is undefined, default to 0, then make sure fd is at least 4
      // This will make make a quiet frequency at least 4px high for visual effects
      const barHeight = Math.max(4, fd || 0);
      bar.style.height = barHeight + "px";

      animations[i].goToAndStop(normalize(fd), true)

      console.log(normalize(fd))
    }

    // At the next animation frame, call ourselves
    window.requestAnimationFrame(renderFrame);

  }

  renderFrame();

  audio.volume = 0.25
  audio.play();

}

const input = document.getElementById('upload');

input.onchange = function(e){
  const sound = document.getElementById('audio');
  sound.src = URL.createObjectURL(this.files[0]);

  // start analyzer
  init();

  // don't forget to revoke the blobURI when you don't need it
  sound.onend = function(e) {
    URL.revokeObjectURL(this.src);
  }
}
const MINVALUE = 0;
const MAXVALUE = 4;
const delta = MAXVALUE - MINVALUE
function normalize(fd){
  return  delta * fd / 255 + MINVALUE
}

// Init lottie

const bgContainer = document.getElementById('animation-bg');
const zoneAContainer = document.getElementById('animation-zone-a');
const zoneBContainer = document.getElementById('animation-zone-b');
const zoneCContainer = document.getElementById('animation-zone-c');



const bgAnimation = lottie.loadAnimation({
  container: bgContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/test-bg_v.01.json'
});

const zoneAAnimation = lottie.loadAnimation({
  container: zoneAContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/test-zoneA_v.01.json'
});

const zoneBAnimation = lottie.loadAnimation({
  container: zoneBContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/test-zoneB_v.01.json'
});

const zoneCAnimation = lottie.loadAnimation({
  container: zoneCContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/test-zoneC_v.01.json'
});


const animations = [zoneAAnimation, zoneBAnimation, zoneCAnimation];
