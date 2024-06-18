$(document).ready(function() {
    // Manejar el formulario de registro
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();

        const userData = {
            nombres: $('#nombres').val(),
            apellidos: $('#apellidos').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/auth/registrar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                $('#message').text(response.message).css('color', 'green');
            },
            error: function(xhr) {
                $('#message').text('Error: ' + xhr.responseJSON.error).css('color', 'red');
            }
        });
    });

    // Manejar el formulario de login
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        const loginData = {
            email: $('#loginEmail').val(),
            password: $('#loginPassword').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/auth/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            success: function(response) {
                $('#message').text(response.message).css('color', 'green');
                $('#loginFormContainer').hide();
                $('#form-title').text('Registro de Usuario');
                $('#registerFormContainer').show();
            },
            error: function(xhr) {
                $('#message').text('Error: ' + xhr.responseJSON.error).css('color', 'red');
            }
        });
    });

    // Mostrar el formulario de registro
    $('#mostrarRegistro').on('click', function() {
        $('#loginFormContainer').hide();
        $('#form-title').text('Registro de Usuario');
        $('#registerFormContainer').show();
        $('#message').text('');
    });

    // Volver al login
    $('#volverLogin').on('click', function() {
        $('#registerFormContainer').hide();
        $('#form-title').text('Login');
        $('#loginFormContainer').show();
        $('#message').text('');
    });
});
