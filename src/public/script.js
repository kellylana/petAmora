window.onload = function () {
  if (window.location.pathname.includes("cadastro.html")) {
    const btnCadastro = document.querySelector(".btn-login");

    btnCadastro.addEventListener("click", () => {
      const nome = document.querySelector('input[name="usuario"]').value;
      const endereco = document.querySelector('input[name="end"]').value;
      const telefone = document.querySelector('input[name="tel"]').value;
      const animal = document.querySelector('input[name="animal"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const senha = document.querySelector('input[name="senha"]').value;

      if (!nome || !endereco || !telefone || !animal || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
      }

      const usuario = {
        name: nome,
        address: endereco,
        phone: telefone,
        petName: animal,
        email,
        password: senha,
      };

      registerUser(usuario);
    });
  }

  if (window.location.pathname.includes("login.html")) {
    const btnLogin = document.getElementById("loginButton");
    btnLogin.addEventListener("click", () => {
      const email = document.querySelector('input[name="usuario"]').value;
      const senha = document.querySelector('input[name="senha"]').value;

      loginUser(email, senha);
    });
  }

  const loginUser = (email, password) => {
    const URL = "http://localhost:5000/api/auth/login";
    const dados = {
      email: email,
      password: password,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        alert("Login realizado com sucesso!");
        return response.json();
      })
      .then((data) => {
        console.log("Sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const registerUser = (payload) => {
    const URL = "http://localhost:5000/api/auth/register";
    const dados = {
      ...payload,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
        return response.json();
      })
      .then((data) => {
        console.log("Sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };
};
