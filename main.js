const init = () => {
  // The number of bars that should be displayed
  const NBR_OF_BARS = 10;

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

  // Get the analyze frequencies
  const frequencyData = new Uint8Array(analyzer.frequencyBinCount);

  // This function has the task to adjust the bar heights according to the frequency data
  const renderFrame = () => {
    bgAnimation.goToAndStop(1, true);

    // Update our frequency data array with the latest frequency data
    analyzer.getByteFrequencyData(frequencyData);

    // Loop through animation instances
    for (let i = 0; i < NBR_OF_BARS; i++) {

      // Since the frequency data array is 1024 in length, we don't want to fetch
      // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
      const index = (i + 10) * 2;
      // fd is a frequency value between 0 and 255
      const fd = frequencyData[index];

      // Go to specific frame
      animations[i].goToAndStop(normalize(fd), true)
    }

    // At the next animation frame, call ourselves
    window.requestAnimationFrame(renderFrame);
  }

  renderFrame();
  audio.volume = 0.25
  audio.play();
}

const input = document.getElementById('upload');

// Play music on upload
input.onchange = function (e) {
  const sound = document.getElementById('audio');
  sound.src = URL.createObjectURL(this.files[0]);

  // start analyzer
  init();

  // don't forget to revoke the blobURI when you don't need it
  sound.onend = function (e) {
    URL.revokeObjectURL(this.src);
  }
}

/** returns scaled down data between MINVALUE and MAXVALUE
 * @return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed
 * */
function normalize(fd) {
  return delta * fd / 255 + MINVALUE
}

//************************** LOTTIE STUFF ***********************************/

const MINVALUE = 0;
const MAXVALUE = 10;
const delta = MAXVALUE - MINVALUE

// Get lottie container refs.
const bgContainer = document.getElementById('animation-bg');
const blob1Container = document.getElementById('animation-zone-1');
const blob2Container = document.getElementById('animation-zone-2');
const blob3Container = document.getElementById('animation-zone-3');
const blob4Container = document.getElementById('animation-zone-4');
const blob5Container = document.getElementById('animation-zone-5');
const blob6Container = document.getElementById('animation-zone-6');
const blob7Container = document.getElementById('animation-zone-7');
const blob8Container = document.getElementById('animation-zone-8');
const blob9Container = document.getElementById('animation-zone-9');
const blob10Container = document.getElementById('animation-zone-10');


// Init lottie animations
const bgAnimation = lottie.loadAnimation({
  container: bgContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/bg.json'
});

const blob_1 = lottie.loadAnimation({
  container: blob1Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_1.json'
});

const blob_2 = lottie.loadAnimation({
  container: blob2Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_2.json'
});

const blob_3 = lottie.loadAnimation({
  container: blob3Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_3.json'
});

const blob_4 = lottie.loadAnimation({
  container: blob4Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_4.json'
});

const blob_5 = lottie.loadAnimation({
  container: blob5Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_5.json'
});

const blob_6 = lottie.loadAnimation({
  container: blob6Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_6.json'
});

const blob_7 = lottie.loadAnimation({
  container: blob7Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_7.json'
});

const blob_8 = lottie.loadAnimation({
  container: blob8Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_8.json'
});

const blob_9 = lottie.loadAnimation({
  container: blob9Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_9.json'
});

const blob_10 = lottie.loadAnimation({
  container: blob10Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_10.json'
});
const animations = [blob_1, blob_2, blob_3, blob_4, blob_5, blob_6, blob_7, blob_8, blob_9, blob_10];
