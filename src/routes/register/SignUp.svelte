<script>
	import { enhance } from "$app/forms";
</script>

<form method="POST" action="?/signup" use:enhance>
    <div class="input-wrapper">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="John Doe">
    </div>

    <div class="input-wrapper">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="email@example.com">
    </div>

    <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="secretpassword">
    </div>

    <button>Register</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form label {
        align-self: start;
        color: rgb(82, 80, 80);
    }

    form input {
        border-radius: 6px;
        border: 1px solid rgba(82, 80, 80, 0.473);
        padding: 10px 15px;
        width: 360px;
    }

    form button {
        margin-top: 30px;
        border: none;
        padding: 15px 50px;
        background-color: rgb(63, 182, 63);
        color: white;
        transition: all 0.2s;
        border-radius: 5px;
    }

    form button:hover {
        background-color: rgba(63, 182, 63, 0.808);
    }
    
</style>