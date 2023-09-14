<script>
	import AddNewSubtask from "../components/DetailsTodo/AddNewSubtask.svelte";
	import Subtask from "../components/DetailsTodo/Subtask.svelte";
import AddTag from "../components/NavMenu/AddTag.svelte";
import Tag from "../components/NavMenu/Tag.svelte";

</script>
<aside>
    <h2>Task:</h2>

    <form class="title-description" action="">
        <input type="text" name="title" id="title" placeholder="Task    ">
        <textarea name="description" id="description" cols="20" rows="10" placeholder="Description"></textarea>

        <div class="input-wrapper">
            <p>List:</p>
            <select name="" id=""></select>
        </div>
        <div class="input-wrapper">
            <p>Due date:</p>
            <input type="date" name="" id="">
        </div>
        <div class="input-wrapper">
            <p>Tags:</p>
            <div class="tags-section">
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <AddTag />
            </div>
        </div>
    </form>

    <h3>Substasks:</h3>

    <AddNewSubtask />

    <Subtask title="onze de setembro..." />
</aside>

<style>
    aside {
        background-color: rgb(209, 203, 203);
        min-width: 330px;
        border-radius: 10px;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    h2 {
        font-weight: bold;
        font-size: 1.4rem;
    }

    .title-description {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .title-description input {
        border: 1px solid rgb(170, 166, 166);
        border-radius: 5px;
        background-color: transparent;
        width: 100%;
        padding: 10px 15px;
    }

    .title-description textarea {
        border: 1px solid rgb(170, 166, 166);
        border-radius: 5px;
        background-color: transparent;
        width: 100%;
        padding: 10px 15px;
        resize: none;
        height: 100px;
    }

    h3 {
        font-weight: bold;
        font-size: 1rem;
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    .input-wrapper p {
        min-width: 70px;
    }

    .input-wrapper input, .input-wrapper select {
        height: 30px;
        width: 100%;
        border-radius: 5px;
        background-color: transparent;
        border: 1px solid rgb(170, 166, 166);
    }

    .tags-section {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
</style>