const test = document.getElementById('modal-overlay');
test.innerHTML = `
<div class="modal">
<form action="">
  <header>
    <h2>Cadastre-se aqui. É rápido!</h2>
  </header>
  <div class="input-login">
    <aside class="first-aside">
      <label for="name">nome</label>
      <input type="text" id="name" name="name" required>
    </aside>

    <aside>
      <label for="email">email</label>
      <input type="email" id="email" name="email" required>
    </aside>

    <aside>
      <label for="">Sua senha</label>
      <input type="password" required>
    </aside>

    <div class="submit">
      <button class="cancel-button" onclick="Modal.close()"> Cancelar</button>
      <button type="submit">Cadastrar</button>

    </div>

  </div>
</form>
</div>
`