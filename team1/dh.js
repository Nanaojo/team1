// Get the dashboard element
const dashboard = document.querySelector('.dashboard');

// Get all the hidden list items
const hiddenItems = document.querySelectorAll('.hidden');

// Add event listener to toggle the visibility on click
dashboard.addEventListener('click', function() {
    hiddenItems.forEach(item => {
        if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'flex'; // Show the items
        } else {
            item.style.display = 'none'; // Hide the items if they're already visible
        }
    });
});
