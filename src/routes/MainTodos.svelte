<script>
	import AddNewTask from "../components/MainTodos/AddNewTask.svelte";
import DayAndTasks from "../components/MainTodos/DayAndTasks.svelte";
	import Todo from "../components/MainTodos/Todo.svelte";

</script>
<main>
    <header>
        <DayAndTasks />
    </header>

    <AddNewTask />

    <section class="todos">
        <Todo title="Fazer..." />
        <Todo title="Fazer..." />
        <Todo title="Fazer..." />
        <Todo title="Fazer..." />
        <Todo title="Fazer..." />
        <Todo title="Fazer..." />
    </section>

</main>

<style>
    main {
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }
</style>