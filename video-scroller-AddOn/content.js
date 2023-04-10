var video = document.querySelector("video");


// Listen for mouse scroll events
video.addEventListener("wheel", function(event) {
  // Get the video element on the page
  // var video = document.querySelector("video");
  if (!video) return;

  // Calculate the scroll speed
  var speed = event.deltaY / 100;

  // Pause the video if it's not already paused
  if (!video.paused) {
    video.pause();
  }

  if (speed > 0) {
    video.playbackRate = speed + 1;
  } else {
    video.playbackRate = -speed - 1;
  }


  // Set the playback rate based on the scroll speed
  // video.playbackRate = Math.abs(speed) + 1;
  // if (speed < 0) {
  //  video.playbackRate *= -1;
  // }

  // Update the playback position based on the scroll speed
  video.currentTime += speed * 0.1; // * 10;

  // Prevent the default scrolling behavior
  event.preventDefault();
});
