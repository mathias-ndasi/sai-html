// modal functionality
let modal = document.querySelector('.remove_modal');
let remove = document.querySelectorAll('.remove');
let no = document.querySelector('#no');
let yes = document.querySelector('#yes');

remove.forEach(item => {
    item.addEventListener('click', e => {
        modal.style.display = "block";

        yes.addEventListener('click', () => {
            modal.style.display = 'none'

            // remvove the table row    
            let parent = e.target.parentElement.parentElement.parentElement;
            parent.removeChild(e.target.parentElement.parentElement);

            // sweetalert
            swal("Action Successful", "Student applicant was successfully removed from the list", "success");
        })

        no.addEventListener('click', () => {
            modal.style.display = 'none'
        })
    })
})