<script>
export default {
  name: 'BaseInput',
  props: ['modelValue'], // el valor que se va a recibir
  emits: ['update:modelValue'] // el evento que se va a emitir
}
</script>

<template>
  <input
    class="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 disabled:bg-gray-200"
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

