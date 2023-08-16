 // Progress Bar
  // Get the progress bar element
  const progressBar = document.getElementById("progress-bar__id");


  // Update progress bar width based on scroll position
  function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;
    progressBar.style.width = progress + "%";
  }
  
  // Attach the updateProgressBar function to the scroll event
  window.addEventListener("scroll", updateProgressBar);