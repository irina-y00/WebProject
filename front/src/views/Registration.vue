<template>

  <div class="register">

    <h1 class="h3 mb-3 font-weight-normal text-center">Регистрация</h1>

    <div class="input">
      <label for="formName" class="sr-only">Имя</label>
      <input type="text" class="form-control input" id="formName" placeholder="Имя" required autofocus>

      <label for="formSecondName" class="sr-only">Имя</label>
      <input type="text" class="form-control input" id="formSecondName" placeholder="Фамилия" required>

      <label for="inputEmail" class="sr-only">Почта</label>
      <input type="email" id="inputEmail" class="form-control input" placeholder="email@example.com" required>

      <label for="inputPassword" class="sr-only">Пароль</label>
      <input type="password" id="inputPassword" class="form-control input" placeholder="Пароль" required>

      <label for="inputPasswordRepeat" class="sr-only">Пароль</label>
      <input type="password" id="inputPasswordRepeat" class="form-control input" placeholder="Повторите пароль" required>

      <button class="btn btn-lg btn-primary" type="submit">Регистрация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style scoped>

.register {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin-bottom: 9%;
  margin-top: 10%;
  margin-left: 35%;
  background-color: #f5f5f5;
  border-radius: 15px;
  top: 50%;
  left: 50%;
}

.form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-login .form-control:focus {
  z-index: 2;
}

.form-login input[type="email"] {
  margin-bottom: 10px;
  border-radius: 10px;
}

.form-login input[type="password"] {
  margin-bottom: 10px;
  border-radius: 10px;
}

.form-login input[type="text"] {
  margin-bottom: 10px;
  border-radius: 10px;
}

.input {
  margin-bottom: 10px;
}

.btn-lg{
  margin-left: 31%;
}
</style>
