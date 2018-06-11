() => {
  return fetch('/api/blogs', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'}
  }).then(res => res.json())
}