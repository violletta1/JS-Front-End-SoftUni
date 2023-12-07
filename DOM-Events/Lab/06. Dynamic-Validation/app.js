function validate() {
    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);

    function onChange(e) {
        const element = e.currentTarget;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (!pattern.test(inputElement.value)) {
            element.classList.add('error');

        }else {
            element.classList.remove('error');
        }
    }
}