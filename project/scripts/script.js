document.addEventListener('DOMContentLoaded', () => {
    const featuredPets = [
        { name: 'Buddy', breed: 'Golden Retriever', image: 'images/pet1.jpeg' },
        { name: 'Mittens', breed: 'Tabby Cat', image: 'images/pet3.jpeg' },
        { name: 'Charlie', breed: 'Beagle', image: 'images/pet2.jpeg' }
    ];

    const petsContainer = document.querySelector('.pets-container');

    featuredPets.forEach(pet => {
        const petElement = document.createElement('div');
        petElement.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Breed: ${pet.breed}</p>
        `;
        petsContainer.appendChild(petElement);
    });

    const adoptForm = document.getElementById('adoptForm');
    adoptForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const petName = document.getElementById('pet-name').value;
        const ownerName = document.getElementById('owner-name').value;

        localStorage.setItem('adoptedPet', JSON.stringify({ petName, ownerName }));

        alert(`Thank you, ${ownerName}, for adopting ${petName}!`);
        adoptForm.reset();
    });
});
