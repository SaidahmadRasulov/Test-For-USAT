emailjs.init("8ERjlfNfMnEj4fFTP");
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  SendMail();
  ShowEnterBtn()
});

function SendMail() {
  const params = {
    fullName: document.getElementById("userName").value,
    phone: document.getElementById("number").value,
    school: document.getElementById("schoolL").value,
    class: document.getElementById("classRoom").value,
    parent: document.getElementById("parents").value,
  };

  if (
    params.fullName &&
    params.phone &&
    params.school &&
    params.class &&
    params.parent !== ""
  ) {
    emailjs
      .send("service_ndpq0tw", "template_hskqdeosss", params)
      .then(function (response) {
        console.log("Email sent successfully:", response);
      })
      .catch(function (error) {
        console.log("Error sending email:", error);
      });
  } else {
    alert('Hammasini toldiring!')
  }
}

const box = document.querySelector('.box');
const testingBox = document.querySelector('.entering_test');

function ShowEnterBtn() {
  box.classList.toggle('hidden');
  testingBox.classList.toggle('visible')
}