function RegisterPage() {
    return (
        <div class="form-signin w-100 mx-auto py-5 container">
            <form action="/login" method="post">
                <h1 class="h3 mb-3 fw-normal">Faça o cadastro</h1>

                <div class="mb-3">
                    <label for="floatingInput">Nome </label>
                    <input type="text" name="name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="floatingInput">Email </label>
                    <input type="email" name="email" class="form-control" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="floatingPassword">Senha</label>
                    <input type="password" name="password" class="form-control" />
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default RegisterPage;