const renderLottie = require("puppeteer-lottie");

// Create an MP4 from a lottie animation
(async () => {
  await renderLottie({
    path: "fixtures/bodymovin.json",
    output: "example.mp4",
  });
})();

// // Create a GIF with width 640px from a lottie animation
// await renderLottie({
//   path: "fixtures/bodymovin.json",
//   output: "example.gif",
//   width: 640,
// });

// // Render each frame of the animation as PNG images with height 128px
// await renderLottie({
//   path: "fixtures/bodymovin.json",
//   output: "frame-%d.png", // sprintf format
//   height: 128,
// });

// // Render the first frame of the animation as a JPEG image
// await renderLottie({
//   path: "fixtures/bodymovin.json",
//   output: "preview.jpg",
// });
