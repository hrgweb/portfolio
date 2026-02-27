<template>
  <div class="messenger">
    <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>

    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      children: `
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      `,
      defer: true
    }
  ]
})

onMounted(() => init())

function init() {
  if (process.client) {
    let chatbox = document.getElementById(
      'fb-customer-chat'
    ) as HTMLDivElement | null
    chatbox?.setAttribute('page_id', '104815385052792')
    chatbox?.setAttribute('attribution', 'biz_inbox')

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v19.0'
      })
    }
  }
}
</script>
