document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded')
    }


// ----------------------- UPDATE ------------------------------------------------------------------------

const devouredBurgerBtns = document.querySelectorAll('.devoured-burger');

if (devouredBurgerBtns) {
    devouredBurgerBtns.forEach((button) => {
        button.addEventListener('click', (e) => {

            const id = e.target.getAttribute('data-id');
            const eatenBurger = e.target.getAttribute('data-eatenBurger');
            
            const newEatenBurger = {
                devoured: eatenBurger,
            };

            fetch(`/api/burgers/${id}`, {
                method:'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(newEatenBurger), 
            }).then((response) => {

                if (response.ok) {
                    console.log(`changed eaten status to: ${eatenBurger}`);
                    location.reload('/');
                } else {
                    alert('something went wrong!')
                }
            })
        })
    })
};




// ----------------------- CREATE --------------------------------------------------------------------


const createBurgerBtn = document.getElementById('create-form');

if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        const newBurger = {
            burger_name: document.getElementById('burg').value.trim(),
            devoured: document.getElementById('devoured').checked,
        };


        fetch('/api/burgers', {
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(newBurger),
        }).then(() => {
            document.getElementById('burg').value = '';

            console.log('Created a new burger!');
            location.reload();
        })
    })
}






})