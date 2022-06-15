button = document.querySelector("#getResidents")
button.addEventListener("click", () => axios.get("https://swapi.dev/api/planets/?search=alderaan")
.then((res) => {
    let residents = (res.data.results[0].residents)
    residents.forEach(element => {
        axios.get(element)
        .then((res) => {
            let name = document.createElement("h2")
            name.textContent = (res.data.name)
            document.body.append(name)
        })
    });
}))