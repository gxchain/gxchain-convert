<template>
    <span class="addr" @click="copyText()">
        {{val}}
        <a-icon type="copy" v-show="!copied" /> 
        <span class="copied-item" v-show="copied"><a-icon type="check-circle" /> {{$t('index.already_copied')}}</span>
    </span>
  
</template>

<script>
export default {
    props: {
        val: {
            type: String,
            required: true
        },
    },
    data(){
        return {
            copied: false,
        }
    },
    methods: {
        sleep(timestamp) {
            return new Promise((resolve) => {
                setTimeout(resolve, timestamp);
            });
        },
        async copyText() {
            try {
                navigator.clipboard.writeText(this.val);
                this.copyToClipboard(this.val);
                this.copied = true;
                setTimeout(() => {
                    this.copied = false
                }, 1500);
            } catch (ex) {
                console.log(ex);
            }
        },
        copyToClipboard(str) {
            const el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(selected);
            }
        },
    }
}
</script>

<style>

</style>
