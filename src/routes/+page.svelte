<script>
	import SignIn from "./SignIn.svelte";
	import TodoApp from "./TodoApp.svelte";

    export let data;
</script>

{#if data.jwt}
    <TodoApp {data} />
{:else}
    <div class="container">
        <h1>SVELTE</h1>
        <SignIn />
        <p class="cta">Don't have an account? <a href="/register">Create here!</a></p>
    </div>
{/if}

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