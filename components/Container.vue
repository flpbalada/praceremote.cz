<template>
    <div class="container m-a p-1">
        <slot> </slot>
    </div>
</template>
<style lang="scss">
.container {
    display: flex;
    flex-direction: column ;
    max-width: 1280px;
}
</style>