'use strick';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const userDelay = event.target.elements.delay.value;
  const userState = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userState === 'fulfilled')
        resolve(`Fulfilled promise in ${userDelay}ms`);
      else reject(`Rejected promise in ${userDelay}ms`);
    }, userDelay);
  });
  promise
    .then(value => {
      iziToast.show({
        title: 'Success',
        message: value,
        color: 'green',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: error,
        color: 'red',
      });
    });
});
