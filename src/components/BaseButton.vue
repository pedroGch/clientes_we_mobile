<script>
import Loader from './Loader.vue';

export default {
    name: 'BaseButton',
    components: { Loader },
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <button
        class="w-full inline-block rounded bg-principal px-6 pb-2 pt-2.5 text-s font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-terciario hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-terciario focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-terciario active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        type="submit" name="enviar" value="Enviar" :disabled="loading">
        <template v-if="!loading">
            <slot>Enviar</slot>
        </template>
        <template v-else>
            <slot>
                <Loader />
            </slot>
        </template>
    </button>
</template>
