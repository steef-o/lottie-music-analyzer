const init = () => {
  // The number of bars that should be displayed
  const NBR_OF_BLOBS = 33;

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

  // set background animation
  bgAnimation.goToAndStop(1, true);

  // This function has the task to adjust the blob size according to the frequency data
  const renderFrame = () => {
    // Update our frequency data array with the latest frequency data
    analyzer.getByteFrequencyData(frequencyData);

    // Loop through animation instances
    for (let i = 0; i < NBR_OF_BLOBS; i++) {

      // Since the frequency data array is 1024 in length, we don't want to fetch
      // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
      const index = (i + 30);
      // fd is a frequency value between 0 and 255
      const fd = frequencyData[index];

      // Scale down value and convert to specific frame (could be fractions).
      animations[i].goToAndStop(scaleDown(fd), true)
    }

    // At the next animation frame, call ourselves
    window.requestAnimationFrame(renderFrame);
  }

  renderFrame();
  audio.volume = 0.25
  audio.play();
}

// Get Input element from DOM.
const input = document.getElementById('upload');

// Play music on upload change.
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

// Min & Max Constants
const MINVALUE = 0;
const MAXVALUE = 10;
const delta = MAXVALUE - MINVALUE
/** returns scaled down data between MINVALUE and MAXVALUE
 * @return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed
 * */
function scaleDown(fd) {
  return delta * fd / 255 + MINVALUE
}

//************************** LOTTIE STUFF ***********************************/

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
const blob11Container = document.getElementById('animation-zone-11');
const blob12Container = document.getElementById('animation-zone-12');
const blob13Container = document.getElementById('animation-zone-13');
const blob14Container = document.getElementById('animation-zone-14');
const blob15Container = document.getElementById('animation-zone-15');
const blob16Container = document.getElementById('animation-zone-16');
const blob17Container = document.getElementById('animation-zone-17');
const blob18Container = document.getElementById('animation-zone-18');
const blob19Container = document.getElementById('animation-zone-19');
const blob20Container = document.getElementById('animation-zone-20');
const blob21Container = document.getElementById('animation-zone-21');
const blob22Container = document.getElementById('animation-zone-22');
const blob23Container = document.getElementById('animation-zone-23');
const blob24Container = document.getElementById('animation-zone-24');
const blob25Container = document.getElementById('animation-zone-25');
const blob26Container = document.getElementById('animation-zone-26');
const blob27Container = document.getElementById('animation-zone-27');
const blob28Container = document.getElementById('animation-zone-28');
const blob29Container = document.getElementById('animation-zone-29');
const blob30Container = document.getElementById('animation-zone-30');
const blob31Container = document.getElementById('animation-zone-31');
const blob32Container = document.getElementById('animation-zone-32');
const blob33Container = document.getElementById('animation-zone-33');


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

const blob_11 = lottie.loadAnimation({
  container: blob11Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_11.json'
});

const blob_12 = lottie.loadAnimation({
  container: blob12Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_12.json'
});

const blob_13 = lottie.loadAnimation({
  container: blob13Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_13.json'
});

const blob_14 = lottie.loadAnimation({
  container: blob14Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_14.json'
});

const blob_15 = lottie.loadAnimation({
  container: blob15Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_15.json'
});

const blob_16 = lottie.loadAnimation({
  container: blob16Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_16.json'
});

const blob_17 = lottie.loadAnimation({
  container: blob17Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_17.json'
});

const blob_18 = lottie.loadAnimation({
  container: blob18Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_18.json'
});

const blob_19 = lottie.loadAnimation({
  container: blob19Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_19.json'
});

const blob_20 = lottie.loadAnimation({
  container: blob20Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_20.json'
});

const blob_21 = lottie.loadAnimation({
  container: blob21Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_21.json'
});

const blob_22 = lottie.loadAnimation({
  container: blob22Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_22.json'
});

const blob_23 = lottie.loadAnimation({
  container: blob23Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_23.json'
});

const blob_24 = lottie.loadAnimation({
  container: blob24Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_24.json'
});

const blob_25 = lottie.loadAnimation({
  container: blob25Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_25.json'
});

const blob_26 = lottie.loadAnimation({
  container: blob26Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_26.json'
});

const blob_27 = lottie.loadAnimation({
  container: blob27Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_27.json'
});

const blob_28 = lottie.loadAnimation({
  container: blob28Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_28.json'
});

const blob_29 = lottie.loadAnimation({
  container: blob29Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_29.json'
});

const blob_30 = lottie.loadAnimation({
  container: blob30Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_30.json'
});

const blob_31 = lottie.loadAnimation({
  container: blob31Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_31.json'
});

const blob_32 = lottie.loadAnimation({
  container: blob32Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_32.json'
});

const blob_33 = lottie.loadAnimation({
  container: blob33Container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/v_01/blob_33.json'
});
const animations = [
  blob_1,
  blob_2,
  blob_3,
  blob_4,
  blob_5,
  blob_6,
  blob_7,
  blob_8,
  blob_9,
  blob_10,
  blob_11,
  blob_12,
  blob_13,
  blob_14,
  blob_15,
  blob_16,
  blob_17,
  blob_18,
  blob_19,
  blob_20,
  blob_21,
  blob_22,
  blob_23,
  blob_24,
  blob_25,
  blob_26,
  blob_27,
  blob_28,
  blob_29,
  blob_30,
  blob_31,
  blob_32,
  blob_33,
];
