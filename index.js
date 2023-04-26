function sendMail() {
  // Recupera os valores dos campos do formulário
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!name || !email || !message || !phone) {
    alert("Por favor, preencha todos os campos obrigatórios");
    return;
  }

  // Verifica se o e-mail é válido
  if (!isValidEmail(email)) {
    alert("Por favor, insira um e-mail válido");
    return;
  }

  // Cria um objeto com os valores dos campos do formulário
  var params = {
    name: name,
    email: email,
    message: message,
    phone: phone,
  };

  // Configura as informações do serviço de e-mail e do modelo
  const serviceID = "service_gmail";
  const templateID = "template_01";

  // Envia o e-mail usando a plataforma EmailJS
  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      // Limpa os valores dos campos do formulário e exibe uma mensagem de confirmação
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("phone").value = "";
      alert("Mensagem enviada com sucesso!");
    }, function(error) {
      // Exibe uma mensagem de erro se o envio do e-mail falhar
      alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
    });
}

function isValidEmail(email) {
  // Expressão regular para validar o e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
}

