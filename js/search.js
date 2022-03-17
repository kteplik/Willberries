const search = function () {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.getElementById('button-addon2')

    /*
    console.log(searchBtn)

    input.addEventListener('input', (event) => {
        console.log(event.target.value)
    })

    input.addEventListener('mouseup', function (event) {
        console.log(event.target.value)
    })
    */
    searchBtn.addEventListener('click', () => {
        console.log(input.value)
    })
}

search()