<script>
	import DetailsTodo from "./DetailsTodo.svelte";
	import MainTodos from "./MainTodos.svelte";
    import NavMenu from "./NavMenu.svelte";

    /**
	 * @type any; }}
	 */
     export let data;
     console.log(data);
</script>

<div class="container">
    <NavMenu />

    <MainTodos />

    <DetailsTodo />
</div>

<style>
    .container {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        gap: 4rem;
    }
</style>