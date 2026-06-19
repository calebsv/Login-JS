//Sistema de Login JavaScript
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

class UserControl {
    constructor()  {
        this.users = [];
    }

    add(user) {
        this.users.push(user);
    }

    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}

class Session {
    constructor() {
        this.loggedUser = null;
    }

    login(user) {
        this.loggedUser = user;
    }

    logout() {
        this.loggedUser = null;
    }

    isLogged() {
        return this.loggedUser !== null;
    }
}

class Auth {
    constructor(userRepository, session) {
        this.userRepository = userRepository;
        this.session = session;
    }

    login(email, senha) {
        const user = this.userRepository.findByEmail(email);

        if (!user) {
            return "Usuário não encontrado";
        }

        if (user.senha !== senha) {
            return "Senha incorreta";
        }

        this.session.login(user);

        return "Login realizado com sucesso";
    }
}