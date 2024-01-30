'use strict';

const button = document.getElementById('calculate');

const calculate = () => {
    const age = parseInt(document.getElementById('age').value);

    // Calculate lower limit
    const lowerLimit = Math.round((220 - age) * 0.65);

    // Calculate upper limit
    const upperLimit = Math.round((220 - age) * 0.85);

    // Display the results
    const limits = document.getElementById('limits');
    limits.textContent = `${lowerLimit} - ${upperLimit}`;
};

button.addEventListener('click', calculate);
