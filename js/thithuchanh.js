document.addEventListener('DOMContentLoaded', () => {g
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.textContent.trim();
            switch (pageName) {
                case 'About Us':
                    alert('Chuyển hướng đến trang About Us...');
                    break;
                case 'Movies':
                    alert('Chuyển hướng đến trang Movies...');
                    break;
                case 'Favorites':
                    alert('Chuyển hướng đến trang Favorites...');
                    break;
                default:
                    console.log('Không tìm thấy trang.');
            }
        });
    });
});