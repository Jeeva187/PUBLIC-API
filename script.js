document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("userList");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i += 4) {
                const userRow = document.createElement("div");
                userRow.classList.add("row");

                for (let j = i; j < i + 4 && j < data.length; j++) {
                    const user = data[j];
                    const userCard = document.createElement("div");
                    userCard.classList.add("col-md-3");

                    userCard.innerHTML = `
                        <div class="card mb-4 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text">
                                    <strong>Username:</strong> ${user.username}<br>
                                    <strong>Email:</strong> ${user.email}<br>
                                    <strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}<br>
                                    <strong>Phone:</strong> ${user.phone}<br>
                                    <strong>Website:</strong> ${user.website}<br>
                                    <strong>Company:</strong> ${user.company.name}<br>
                                    <strong>Catchphrase:</strong> ${user.company.catchPhrase}<br>
                                    <strong>BS:</strong> ${user.company.bs}
                                </p>
                            </div>
                        </div>
                    `;

                    userRow.appendChild(userCard);
                }

                userList.appendChild(userRow);
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
