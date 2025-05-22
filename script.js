const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
        accordionContents.forEach((content, i) => {
            if (index === i) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentPage = 1;

function updatePage(page) {
    pages.forEach((pg, index) => {
        if (index === page - 1) {
            pg.classList.add('active');
            accordionContents.forEach((content, i) => {
                content.style.display = i === index ? 'block' : 'none';
            });
        } else {
            pg.classList.remove('active');
        }
    });
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pages.length;
}

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        currentPage = index + 1;
        updatePage(currentPage);
    });
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length) {
        currentPage++;
        updatePage(currentPage);
    }
});

updatePage(currentPage);
