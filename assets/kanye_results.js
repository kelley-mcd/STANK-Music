const quoteField = $("#kanye-random-quote")

fetch("https://api.kanye.rest")
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    })
    .then (function(data) {
        quoteField.text(data.quote);
    })