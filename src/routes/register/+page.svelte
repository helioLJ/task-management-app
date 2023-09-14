<script>
	import SignUp from "./SignUp.svelte";

</script>

<div class="container">
	<h1>SVELTE</h1>
	<SignUp />
	<p class="cta">Already have an account? <a href="/">Login here!</a></p>
</div>

<style>
	h1 {
        text-align: center;
        font-weight: bold;
        font-size: 80px;
    }

    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        gap: 50px;

        color: rgb(82, 80, 80);
    }

    .cta {
        text-align: center;
    }

    .cta a {
        color: rgb(53, 53, 206);
        text-decoration: underline;
        font-weight: bold;
    }
</style>