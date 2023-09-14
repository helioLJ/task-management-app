<form class="input-wrapper" action="">
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20M12 4V20" stroke="#6e6b6b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <input type="text" name="addnewsubtask" id="addnewsubtask" placeholder="Add New Subtask">
</form>

<style>
    .input-wrapper {
        position: relative;
    }

    .input-wrapper svg {
        position: absolute;
        left: 10px;
        top: 10px;
    }

    .input-wrapper input { 
        border: 1px solid rgb(170, 166, 166);
        border-radius: 5px;
        background-color: transparent;
        width: 100%;
        padding: 10px 15px;
        padding-left: 40px;
    }
</style>