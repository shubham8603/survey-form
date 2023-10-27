document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const submittedData = document.getElementById("submittedData");

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function () {
        surveyForm.reset();
        submittedData.innerHTML = ""; // Clearing the submitted data
        popup.style.display = "none"; // Hiding the popup
    });

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
        if (surveyForm.checkValidity()) {
            const formData = new FormData(surveyForm);
            let dataHTML = "<h3>Submitted Data:</h3>";

            formData.forEach(function (value, key) {
                dataHTML += `<p><strong>${key}:</strong> ${value}</p>`;
            });

            submittedData.innerHTML = dataHTML;
            popup.style.display = "block";
        } else {
            // output for incomplete or invalid data
            submittedData.innerHTML = "<p>Please fill out all required fields with valid data.</p>";
            popup.style.display = "block";
        }
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
