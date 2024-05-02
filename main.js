const textarea = document.getElementById('myTextarea');
    textarea.addEventListener('input', () => {
      const words = textarea.value.split(/\s+/).filter(word => word !== '');
      console.log("Number of words:", words.length);
    });