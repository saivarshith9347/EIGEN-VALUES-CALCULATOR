function calculateEigen() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const d = parseFloat(document.getElementById("d").value);
  
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
      return;
    }
  
    // Create the matrix
    const matrix = [[a, b], [c, d]];
  
    try {
      // Use math.js to calculate eigenvalues and eigenvectors
      const eig = math.eigs(matrix);
      const eigenvalues = eig.values.map(val => val.toFixed(4));
      const eigenvectors = eig.vectors.map(vec => vec.map(v => v.toFixed(4)));
  
      // Correct string interpolation using backticks for HTML content
      let resultHTML = `<h3>Results:</h3>`;
      resultHTML += `<p><strong>Eigenvalues:</strong> ${eigenvalues.join(", ")}</p>`;
      resultHTML += `<p><strong>Eigenvectors:</strong><br>${eigenvectors.map(vec => `[${vec.join(", ")}]`).join("<br>")}</p>`;
      
      // Display result in the HTML element
      document.getElementById("result").innerHTML = resultHTML;
    } catch (error) {
      document.getElementById("result").innerHTML = "An error occurred. Please ensure the matrix is valid.";
    }
}
