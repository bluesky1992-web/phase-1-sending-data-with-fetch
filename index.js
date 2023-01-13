// Add your code here
// Add your code here

function submitData(userName, userEmail) {
  const user = {
    name: userName,
    email: userEmail,
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
      const h1 = document.querySelector("h1");
      h1.innerText = data.id;
    })

    .catch(error => {
        const p = document.querySelector('p')
        p.innerText = error.message
    })
  return fetchingData;
}
