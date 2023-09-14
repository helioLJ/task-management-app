<script>
	import Info from "./Info.svelte";

    /**
     * @type {string}
     */
    export let title;
</script>

<li>
    <div class="content">
        <form action="">
            <input type="checkbox" name="check" id="check">
        </form>

        <section>
            <p>{title}</p>

            <div class="info">
                <Info title='22-03-4' icon='date' />
                <Info title='Subtasks' icon='number' tasks={5} />
                <Info title='Personal' icon='color' />
            </div>
        </section>
    </div>

    <button>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</li>

<style>
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #d1cbcb;
        padding: 15px 0;
    }

    li .content {
        display: flex;
        align-items: flex-start;
        gap: 15px;
    }

    li .content form {
        display: flex;
        align-items: center;
    }

    li .content form input {
        height: 15px;
        width: 15px;
        cursor: pointer;
        margin-top: 2px;
    }

    .info {
        margin-top: 7px;
        display: flex;
        gap: 10px;
    }

    button {
        background: none;
    }
</style>