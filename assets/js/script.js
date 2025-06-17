// Fetch GitHub repositories
const githubUsername = "Pranava-Kailash";
const githubProjectsGrid = document.getElementById('github-projects-grid');

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      // Exclude the repository named "Pranava-Kailash"
      if (repo.name !== "Pranava-Kailash.github.io" && repo.name !== "Pranava-Kailash") {
        const projectCard = `
          <div class="project-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available."}</p>
            <p><strong>Language:</strong> ${repo.language || "N/A"}</p>
            <p><strong>⭐ Stars:</strong> ${repo.stargazers_count} | <strong>🍴 Forks:</strong> ${repo.forks_count}</p>
            <a href="${repo.html_url}" target="_blank" class="btn">View on GitHub</a>
          </div>
        `;
        githubProjectsGrid.innerHTML += projectCard;
      }
    });

    // // Add "More projects are being added" after all GitHub projects
    // githubProjectsGrid.innerHTML += `<p>More projects are being added...</p>`;
  })
  .catch(error => {
    console.error('Error fetching GitHub repositories:', error);
  });

// Fetch Hugging Face models
const huggingFaceUsername = "PranavaKailash";
const huggingFaceProjectsGrid = document.getElementById('huggingface-projects-grid');

fetch(`https://huggingface.co/api/models?author=${huggingFaceUsername}`)
  .then(response => response.json())
  .then(models => {
    models.forEach(model => {
      const projectCard = `
        <div class="project-card">
          <h3>${model.id}</h3>
          <p>${model.cardData ? model.cardData.description : "No description available."}</p>
          <a href="https://huggingface.co/${model.id}" target="_blank" class="btn">View on Hugging Face</a>
        </div>
      `;
      huggingFaceProjectsGrid.innerHTML += projectCard;
    });

    // // Add "More models are being added" after all Hugging Face models
    // huggingFaceProjectsGrid.innerHTML += `<p>More models are being added...</p>`;
  })
  .catch(error => {
    console.error('Error fetching Hugging Face models:', error);
  });

// Fetch Hugging Face datasets
const huggingFaceDatasetsGrid = document.getElementById('huggingface-datasets-grid');

fetch(`https://huggingface.co/api/datasets?author=${huggingFaceUsername}`)
  .then(response => response.json())
  .then(datasets => {
    datasets.forEach(dataset => {
      const datasetCard = `
        <div class="project-card">
          <h3>${dataset.id}</h3>
          <p>${dataset.cardData ? dataset.cardData.description : "No description available."}</p>
          <a href="https://huggingface.co/datasets/${dataset.id}" target="_blank" class="btn">View on Hugging Face</a>
        </div>
      `;
      huggingFaceDatasetsGrid.innerHTML += datasetCard;
    });

    // // Add "More datasets are being added" after all Hugging Face datasets
    // huggingFaceDatasetsGrid.innerHTML += `<p>More datasets are being added...</p>`;
  })
  .catch(error => {
    console.error('Error fetching Hugging Face datasets:', error);
  });
