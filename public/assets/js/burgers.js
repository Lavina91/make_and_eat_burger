document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    if (event) {
        console.info('DOM loaded')
    }

// ----------------------- CREATE --------------------------------------------------------------------


const createBurgerBtn = document.getElementById('create-form');

if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('connected')

        const newBurger = {
            burger_name: document.getElementById('burg').value.trim(),
            devoured: document.getElementById('eaten').checked,
        };

        console.log(newBurger)


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
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newEatenBurger),
                }).then((response) => {

                    if (response.ok) {
                        console.log(`changed eaten status to: ${eatenBurger}`);
                        console.log(createBurgerBtn)
                        location.reload('/');
                    } else {
                        alert('something went wrong!')
                    }
                })
            })
        })
    };






})