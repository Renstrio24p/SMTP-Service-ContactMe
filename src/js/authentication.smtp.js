
export default function SMTP_Function(){
    // Add event listener to the form submission
  const form = document.getElementById('myForm');
  form.addEventListener('submit', sendEmail);

  function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const EmailSend = document.getElementById('email'),
          SenderName = document.getElementById('name'),
          Phone = document.getElementById('phone'),
          Message = document.getElementById('message');
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "waren.gador15@gmail.com",
      Password: "A43343D7EADCC90EFEDFB965A2767ABAF4AB",
      Port: 2525,
      To: 'renstrio@outlook.com',
      From: EmailSend.value,
      Subject: `New Inquiry from '${EmailSend.value}'`,
      Body: `
            Name:  ${SenderName.value} <br>
            Email: ${EmailSend.value} <br>
            Phone: ${Phone.value} <br> <br>
            Message: ${Message.value} 
      `
      
    }).then(
      message => console.log(message, "Your Message sent.")
    );
  }
}