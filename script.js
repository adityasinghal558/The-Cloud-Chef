document.addEventListener('DOMContentLoaded', function () {
    const dishContainer = document.getElementById('dishContainer');

    // Sample dish data (replace with your actual data)
    const dishes = [
        { name: 'CHINI PATAKHE', image: 'https://png.pngtree.com/png-clipart/20230913/original/pngtree-chilli-clipart-cartoon-character-potato-with-red-hat-and-wizard-s-png-image_11069608.png', description: 'Introducing "Chini Patakhe" – a culinary explosion that will set your taste buds ablaze with a symphony of flavors! Imagine tender potato wedges, perfectly crisped to golden perfection, and then coated in a tantalizing blend of sweet and spicy sauces that will leave you craving for more.', price: '270'  },
        { name: 'Jalebili', image: 'https://www.shutterstock.com/image-vector/jalebi-indian-sweets-mithai-food-260nw-1805434735.jpg', description: 'Introducing "Jalebili" – a confectionery marvel that transcends the ordinary, offering a sugary symphony that will sweep you off your feet! Imagine delicate spirals of golden sweetness, ethereally light and irresistibly tempting, crafted with the precision of a culinary artist.' , price:'180'  },
        { name: 'Paneer Shamosha', image: 'https://img.freepik.com/premium-vector/samosa-cartoon-traditional-indian-cuisine-nepalese-cuisine-logo-cafe-national-culinary_456865-174.jpg?w=2000', description: 'Introducing "Paneer Shamosha" – a culinary masterpiece that elevates the samosa experience to new heights, fusing traditional flavors with a contemporary twist! Envision a golden, flaky exterior giving way to a sumptuous filling of crumbly paneer, meticulously spiced and seasoned to perfection.', price:'50'}
    ];

    // Generate HTML for each dish
    dishes.forEach(dish => {
        const dishItem = document.createElement('div');
        dishItem.classList.add('dish-item');

        const dishImg = document.createElement('img');
        dishImg.src = dish.image;
        dishImg.alt = dish.name;
        dishImg.classList.add('dish-img');

        dishImg.addEventListener('mouseenter', function () {
            dishImg.classList.add('hovered');
        });

        dishImg.addEventListener('mouseleave', function () {
            dishImg.classList.remove('hovered');
        });

        const dishInfo = document.createElement('div');
        dishInfo.classList.add('dish-info');

        const dishTitle = document.createElement('h3');
        dishTitle.textContent = dish.name;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = dish.description;

        const dishPrice = document.createElement('span');
        dishPrice.classList.add('dish-price');
        dishPrice.textContent = 'Price: ' + dish.price;

        // Hide the price initially
        dishPrice.style.display = 'none';

        // Add event listeners for hover effect
        dishItem.addEventListener('mouseenter', function () {
            dishPrice.style.display = 'block';
        });

        dishItem.addEventListener('mouseleave', function () {
            dishPrice.style.display = 'none';
        });

        dishInfo.appendChild(dishTitle);
        dishInfo.appendChild(dishDescription);
        dishInfo.appendChild(dishPrice);

        dishItem.appendChild(dishImg);
        dishItem.appendChild(dishInfo);

        dishContainer.appendChild(dishItem);
    });
});
