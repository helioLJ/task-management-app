<script>
	import AddTag from "../components/NavMenu/AddTag.svelte";
import HamburguerMenu from "../components/NavMenu/HamburguerMenu.svelte";
	import ListItem from "../components/NavMenu/ListItem.svelte";
	import ListItemColor from "../components/NavMenu/ListItemColor.svelte";
	import Tag from "../components/NavMenu/Tag.svelte";
	import Settings from "./Settings.svelte";
</script>

<nav>
    <header>
        <h2>Menu</h2>
        <HamburguerMenu />
    </header>

    <div class="tasks">
        <h3>TASKS</h3>
        <ul>
            <ListItem href="/" title="Upcoming" number={5} >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.63574 7.75737L7.04996 6.34315L12.7068 12L7.04998 17.6568L5.63577 16.2426L9.87839 12L5.63574 7.75737Z" fill="#000000"/>
                    <path d="M12.7068 6.34315L11.2926 7.75737L15.5352 12L11.2926 16.2426L12.7068 17.6568L18.3637 12L12.7068 6.34315Z" fill="#000000"/>
                </svg>
            </ListItem>
            <ListItem href="/" title="Today" number={3} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            </ListItem>
            <ListItem href="/" title="Calendar">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </ListItem>
        </ul>
    </div>

    <div class="lists">
        <h3>LISTS</h3>
        <ul>
           <ListItemColor href="/" title="Work" number={2} />
        </ul>
    </div>

    <div class="tags">
        <h3>TAGS</h3>
        <div class="tags-section">
            <Tag title="Tag asd" />
            <Tag title="Taga" />
            <Tag title="Tag  fdgsdfgdfgdf" />
            <Tag title="Tag  sdd" />
            <Tag title="Tag  fdggsd" />
            <AddTag />
        </div>
    </div>

    <footer>
        <ul>
            <Settings title="Sign-Out" >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z" fill="#000000"/>
                </svg>
            </Settings>
        </ul>
    </footer>
</nav>

<style>
    nav {
        background-color: rgb(209, 203, 203);
        height: 100%;
        min-width: 300px;
        border-radius: 10px;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header h2 {
        font-weight: bold;
        font-size: 1.4rem;
    }

    h3 {
        font-size: .7rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .2rem;
        margin-bottom: 10px;
    }

    .tasks, .lists, .tags {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .tags-section {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    footer {
        margin-top: auto;
    }
</style>