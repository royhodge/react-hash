



class Effects {
    fadeIn(element) {
        element.classList.replace('fadeOut', 'fadeIn');
    }

    fadeOut(element) {
        element.classList.replace('fadeIn', 'fadeOut');
    }

    hideModal(element) {
        element.style.display = 'none';
    }

    showModal(element) {
        element.style.display = 'block';
    }

    hover_shadow(element) {
        element.addEventListener('mouseover', () => {
            element.classList.add('w3-card-4');
        });
        element.addEventListener('mouseout', () => {
            element.classList.remove('w3-card-4');
        });
    }

    openTabs(id, cls) {
        let y = document.querySelectorAll(`.${cls}`);
        let x = document.querySelector(`#${id}`);
        y.forEach((val) => {
            if (val.classList.contains('w3-hide') === false) {
                val.classList.add('w3-hide');
            }
        });
        x.classList.remove('w3-hide');
    }
}
