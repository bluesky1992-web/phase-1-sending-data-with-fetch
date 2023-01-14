// Add your code here
// Add your code here

function submitData(name, email) {
  const user = {
    name,
    email,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };
  const fetchingData = fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML = data["id"];
    })

    .catch((error) => {
      document.body.innerHTML = error.message;
    });
  return fetchingData;
}
