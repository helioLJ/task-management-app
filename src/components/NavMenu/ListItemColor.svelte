<script>
    /**
     * @type {string}
     */
    export let href;

    /**
     * @type {string}
     */
    export let title;

    /**
     * @type {number}
     */
    export let number = -1;
</script>

<li>
    <a href={href}>
        <div>
            <i></i>
            <p>{title}</p>
        </div>
        {#if number !== -1}
        <span>{number}</span>
        {/if}
    </a>
</li>

<style>
    li a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        padding: 5px 10px;
    }

    li a:hover {
        background-color: rgb(179, 173, 173);
        transition: all 0.4s;
    }

    li a div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    li a p {
        font-size: .8rem;
        font-weight: 500;
        width: 80px;
    }

    li a div i {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        background-color: rgb(201, 68, 68);
        border-radius: 4px;
    }

    li a span {
        background-color: #e6e1e1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 20px;
        border-radius: 5px;
        font-size: 0.7rem;
        font-weight: 600;
    }
</style>