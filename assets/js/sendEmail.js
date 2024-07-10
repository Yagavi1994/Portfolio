function sendMail(contactForm) {
    emailjs.send("service_8df1d7n", "yagavi", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value,
        "to_name": "Yagavi"
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from refreshing the page
}