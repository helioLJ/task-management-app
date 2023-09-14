<script>
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

        <p>{title}</p>
    </div>
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
</style>