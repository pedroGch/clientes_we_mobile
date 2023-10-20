<script>
export default {
  name: 'BaseInput',
  props: ['modelValue'], // el valor que se va a recibir
  emits: ['update:modelValue'] // el evento que se va a emitir
}
</script>

<template>
  <input
    class="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none  dark:text-neutral-200 disabled:bg-gray-200"
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

