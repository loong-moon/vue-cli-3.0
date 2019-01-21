<template>
    <div class="nd-radio">
        <span class="nd-radio_input">
            <input
                    v-model="currentValue"
                    class="nd-radio_orig"
                    type="radio"
                    :value="name"
                    :disabled="isDisabled"
            >
            <slot name="icon">
                <span class="nd-radio_check nd-radio_checked"></span>
            </slot>
        </span>
        <span class="nd-radio_label">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'NdRadio',
        props: {
            name: null,
            value: null,
            disabled: Boolean,
        },
        data () {
            return {
                currentValue: null
            }
        },
        computed: {
            checked () {
                return this.currentValue === this.name;
            },

            isDisabled () {
                return this.parent
                    ? this.parent.disabled || this.disabled
                    : this.disabled
            },
        }
    }
</script>

<style lang="scss">
    .nd-radio {}
    .nd-radio_input, .nd-radio_label {
        display: inline-block;
        vertical-align: middle;
    }
    .nd-radio_input {
        position: relative;
        width: 36px;
        height: 36px;
    }
    .nd-radio_orig {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
    }
    .nd-radio_check {
        position: absolute;
    }
</style>
