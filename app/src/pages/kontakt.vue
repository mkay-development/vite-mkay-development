<template>
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-3">
      <h2 class="text-xl font-bold">Kontakt</h2>
      <p>
        Ihr habt einen Wunsch nach einer neuen Webseite oder andere Fragen ?
        Dann kontaktiert und einfach per mail an
        <a
          href="mailto:mail@mkay-development.de"
          target="_blank"
          class="text-blue-400"
          >mail@mkay-development.de</a
        >
        oder per Kontaktformular auf der rechten Seite.
      </p>
      <h3 class="mt-10 text-xl font-bold text-center">
        Zur Verfügung steht ihnen
      </h3>
      <img
        src="https://avatars.githubusercontent.com/u/20771653?v=4"
        class="w-32 mx-auto my-5 rounded-full"
        alt=""
      />
      <p class="text-center">
        Jonathan Martz <br />
        Geschäftsführer / Entwickler <br />
        02261 / 12345
      </p>
    </div>
    <div class="col-span-6 md:col-span-3">
      <div class="space-y-3 form">
        <div class="form-group">
          <label class="block w-full px-2 py-2" for="">Name</label>
          <input
            type="text"
            class="w-full px-2 py-2 bg-gray-100"
            placeholder="Jonathan Martz"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label class="block w-full px-2 py-2" for="">Email</label>
          <input
            type="email"
            class="w-full px-2 py-2 bg-gray-100"
            placeholder="mail@jmartz.de"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="block w-full px-2 py-2" for="">Email</label>
          <textarea
            cols="10"
            v-model="message"
            rows="6"
            class="w-full px-2 py-2 bg-gray-100"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit provident architecto molestiae nemo, repudiandae dignissimos, a aut earum expedita eveniet, modi eum culpa possimus? Eveniet minus repudiandae laudantium pariatur!"
          ></textarea>
        </div>
        <div class="text-right form-group">
          <button @click="send()" class="px-2 py-2 bg-gray-200">
            Abschicken
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { ref } from "vue";
import { useRouter } from "vue-router";
let breadcrumbStore = useBreadcrumbStore();
let name = ref("");
let email = ref("");
let message = ref("");
let router = useRouter();

breadcrumbStore.add({
  link: "/kontakt",
  label: "Kontakt",
});

let send = function () {
  fetch("https://admin.mkay-development.de/api/collections/kontakt/records", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.id) {
        router.push("/");
      }
    });
};
</script>
