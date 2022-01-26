const baseline_btn = document.getElementById('baseline_btn');
const leading_btn = document.getElementById('leading_btn');
const stacked_btn = document.getElementById('stacked_btn');

const baseline_snackbar = document.getElementById('baseline_snackbar');
const leading_snackbar = document.getElementById('leading_snackbar');
const stacked_snackbar = document.getElementById('stacked_snackbar');

baseline_btn.addEventListener('click', () => showSnackbar(baseline_snackbar));
leading_btn.addEventListener('click', () => showSnackbar(leading_snackbar));
stacked_btn.addEventListener('click', () => showSnackbar(stacked_snackbar));

const showSnackbar = id => {
    id.classList.remove('hide');

    setTimeout(() => {
        id.classList.add('hide');
    }, 3000);
}