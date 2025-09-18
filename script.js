
  let userInput = document.getElementById("date");
    // Set max date to today
userInput.max = new Date().toISOString().split("T")[0];

 let nameField = document.getElementById("name");
    
    function CalculateAge() {
    
       
        let name = nameField.value.trim(); 
        let result = document.getElementById("result");
        let birthDate = new Date(userInput.value);

         nameField.classList.remove("error");
        userInput.classList.remove("error");

        // Validate Name
        if (name === "") {
            alert("Please enter your name!");
            nameField.classList.add("error");
            nameField.focus();
            return; // Stop execution
        }

        // Validate DOB
        if (userInput === "") {
            alert("Please select your date of birth!");
            userInput.classList.add("error");
            userInput.focus();
            return; // Stop execution
        }

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let today = new Date();

        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `${name}, your are  <span>${y3}</span> years,<span> ${m3}</span> months, and <span>${d3}</span> days old.`;
        console.log(y3, m3, d3);
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
}
    
function reset() {
    nameField.value = " ";
    userInput.value = " ";
    result.innerHTML = " ";


}