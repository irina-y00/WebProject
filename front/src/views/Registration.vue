<template>
    <div class="form-login form-body text-center">

      <h1 class="h3 mb-3 font-weight-normal">Регистрация</h1>

      <label for="formName" class="sr-only">Имя</label>
      <input type="text" class="form-control" id="formName" placeholder="Имя" required autofocus>

      <label for="formSecondName" class="sr-only">Имя</label>
      <input type="text" class="form-control" id="formSecondName" placeholder="Фамилия" required>

      <label for="inputEmail" class="sr-only">Почта</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="email@example.com" required>

      <label for="inputPassword" class="sr-only">Пароль</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>

      <label for="inputPasswordRepeat" class="sr-only">Пароль</label>
      <input type="password" id="inputPasswordRepeat" class="form-control" placeholder="Повторите пароль" required>

      <button class="btn btn-lg btn-primary " type="submit">Регистрация</button>

    </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>
