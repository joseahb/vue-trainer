<template>
    <div>
        <div>
            <aside class="menu">
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li><a class=" is-active">Dashboard</a></li>
            </ul>
            <p class="menu-label">
                Services
            </p>
            <ul class="menu-list">
                <li> <a>Manage Services</a>  </li>
                <li> <a>Create Services</a>  </li>
            </ul>
            
            <p class="menu-label">
                Administration
            </p>
            <ul class="menu-list">
                <li><a>User Settings</a></li>
                <li>
                <a>Manage Users</a>
                <ul>
                    <li><a>Users</a></li>
                    <li><a>Add User</a></li>
                </ul>
                </li>
                <li><a>Roles</a></li>
                <li><a>Permissions</a></li>
            </ul>
            <p class="menu-label">
                Transactions
            </p>
            <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
            </ul>


            </aside>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style scoped>
    aside {
        padding-inline: 1rem;
    }
</style>