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









})