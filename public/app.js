const form = document.getElementById('hello-form');
const output = document.getElementById('output');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const res = await fetch(`/api/hello?name=${encodeURIComponent(name || 'world')}`);
  const data = await res.json();
  output.textContent = data.message;
});
