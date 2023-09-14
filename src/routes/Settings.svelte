<script>
    /**
     * @type {string}
     */
    export let title;
</script>

<li>
    <button>
        <slot />
        <p>{title}</p>
    </button>
</li>

<style>

    li button {
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        padding: 5px 10px;
        font-size: .8rem;
    }

    li button:hover {
        background-color: rgb(179, 173, 173);
        transition: all 0.4s;
    }
</style>