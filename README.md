# PROBLEMATICA 11 BACKEND
![](assets/imgLogin.png)
![](assets/imgRegister.png)
Validacion de registro y login

## Pre-requisitos 📋

#### Login form:

Email: debe tener un formato de email válido.
Password: Al menos 8 caracteres, formados por letras y números.

#### Register form:
Full name: Debe tener más de 6 letras y al menos un espacio entre medio.
Email: debe tener un formato de email válido.
Password: Al menos 8 caracteres, formados por letras y números.
Confirm password: debe ser igual al contenido del input Password.

La validación de cada campo se debe realizar en el evento “blur” de cada uno de los campos.
Si el campo posee algún error, este se debe mostrar en una etiqueta HTML destinada a mostrar el error de ese campo en particular. El error se debe mostrar debajo del campo validado.
Además, si algún campo tiene un error de validación, en el evento “focus” de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error.

Al presionar el botón “Registrarse” o “Iniciar sesión”, se debe mostrar debajo del formulario dentro del div utilizado para mostrar los errores en la clase pasada, los valores ingresados en el formulario.

## Autores ✒️

Ottolini Santiago



