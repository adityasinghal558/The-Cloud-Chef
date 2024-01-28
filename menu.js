ocument.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menuContainer');

    // Sample menu data (replace with your actual data)
    const menuItems = [
        { name: 'Appetizer 1', image: 'appetizer1.jpg', description: 'Description of Appetizer 1.' },
        { name: 'Appetizer 2', image: 'appetizer2.jpg', description: 'Description of Appetizer 2.' },
        { name: 'Main Course 1', image: 'maincourse1.jpg', description: 'Description of Main Course 1.' },
        { name: 'Main Course 2', image: 'maincourse2.jpg', description: 'Description of Main Course 2.' },
        { name: 'Dessert 1', image: 'dessert1.jpg', description: 'Description of Dessert 1.' },
        { name: 'Dessert 2', image: 'dessert2.jpg', description: 'Description of Dessert 2.' },
    ];

    // Generate HTML for each menu item
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const menuImg = document.createElement('img');
        menuImg.src = item.image;
        menuImg.alt = item.name;
        menuImg.classList.add('menu-img');

        const menuInfo = document.createElement('div');
        menuInfo.classList.add('menu-info');

        const menuTitle = document.createElement('h3');
        menuTitle.classList.add('menu-title');
        menuTitle.textContent = item.name;

        const menuDescription = document.createElement('p');
        menuDescription.classList.add('menu-description');
        menuDescription.textContent = item.description;

        menuInfo.appendChild(menuTitle);
        menuInfo.appendChild(menuDescription);

        menuItem.appendChild(menuImg);
        menuItem.appendChild(menuInfo);

        menuContainer.appendChild(menuItem);
    });
});
