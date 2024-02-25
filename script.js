function isValidPhoneNumber(phoneNumber) {
  const cleanedPhoneNumber = phoneNumber.replace(/\s/g, "");
  const phoneRegex = /\+\d{3}\d{2}\d{3}\d{2}\d{2}$/;
  return phoneRegex.test(cleanedPhoneNumber);
}

emailjs.init("8ERjlfNfMnEj4fFTP");
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  SendMail();
});

const select = document.getElementById("course");

select.addEventListener("change", function () {
  console.log(select.value);
});

function SendMail() {
  const params = {
    fullName: document.getElementById("userName").value,
    phone: document.getElementById("number").value,
    school: document.getElementById("schoolL").value,
    class: document.getElementById("classRoom").value,
    parent: document.getElementById("parents").value,
    courses: document.getElementById("course").value,
  };

  if (
    params.fullName &&
    params.school &&
    params.class &&
    params.parent !== ""
  ) {
    if (!isValidPhoneNumber(params.parent)) {
      alert("Telefon raqam kiritilmagan. Iltimos telefon raqam kiriting.");
    } else {
      emailjs
        .send("service_29a517y", "template_hskqdeosss", params)
        .then(function (response) {
          console.log("Email sent successfully:", response);
        })
        .catch(function (error) {
          console.log("Error sending email:", error);
        });
      ShowEnterBtn();
    }
  } else {
    alert("Hammasini toldiring!");
  }
}

const box = document.querySelector(".box");
const testingBox = document.querySelector(".entering_test");

function ShowEnterBtn() {
  box.classList.toggle("hidden");
  testingBox.classList.toggle("visible");
}
