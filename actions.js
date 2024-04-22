

const submit = document.querySelector("#submit");
submit.addEventListener('click', validarFormulario)

const form = document.querySelector('form');
const aviso = document.createElement("p");


function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    const confirmaSenha = document.querySelector("#confirmPassword").value;

    if (nome === "") {
        exibirMensagem("#labelNome", "O campo nome é obrigatório.")
        return;
    }

    if (sobrenome === "") {
        exibirMensagem("#labelSobrenome", "O campo sobrenome é obrigatório.")
        return;
    }

    if (email === "") {
        exibirMensagem("#labelEmail", "O campo email é obrigatório.")
        return;
    }

    const validarEmail = ((email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
        }
    );

    if (!validarEmail(email)) {
        exibirMensagem("#labelEmail", "Insira um e-mail válido.")
        return;
    }

    if (senha === "") {
        exibirMensagem("#labelPassword", "O campo senha é obrigatório.")
        return;
    }

    if (senha !== confirmaSenha) {
        exibirMensagem("#labelConfirmaPassword", "As senhas devem ser iguais.")
        return;
    }

    const pessoa = {
        nome,
        sobrenome,
        email,
        senha
    }

    console.log(pessoa)

    form.reset();
}

function exibirMensagem(identificador, mensagem){
    aviso.className = "warning";
    aviso.innerHTML = mensagem;

    const label = document.querySelector(identificador);
    label.appendChild(aviso)
    return;
}