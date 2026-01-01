async function generate() {
  const output = document.querySelector('#output');
  output.innerHTML += '<hr>';
  try {
    let data = await fetch('data.json');
    data = await data.json();

    for (const [desc, choices] of Object.entries(data)) {
      const choice = choices[Math.random() * choices.length | 0]
      output.innerHTML += `<p>${desc}: ${choice}</p>`;
    }
  } catch (err) {
    output.innerHTML += `<p>${err.message}</p>`;
  }
}

const button = document.querySelector('#generate');
button.onclick = generate;
