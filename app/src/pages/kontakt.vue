<template>
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-3">
      <h2 class="font-bold text-xl">Kontakt</h2>
      <p>
        Ihr habt einen Wunsch nach einer neuen Webseite oder andere Fragen ?
        Dann kontaktiert und einfach per mail an
        <a href="mailto:mail@mkay-development.de" target="_blank" class="text-blue-400"
          >mail@mkay-development.de</a
        >
        oder per Kontaktformular auf der rechten Seite.
      </p>
      <h3 class="font-bold text-xl mt-10 text-center">Zur Verfügung steht ihnen</h3>
      <img
        src="https://avatars.githubusercontent.com/u/20771653?v=4"
        class="rounded-full w-32 mx-auto my-5"
        alt=""
      />
      <p class="text-center">
        Jonathan Martz <br />
        Geschäftsführer / Entwickler <br />
        02261 / 12345
      </p>
    </div>
    <div class="col-span-6 md:col-span-3">
      <div class="form space-y-3">
        <div class="form-group">
          <label class="w-full block px-2 py-2" for="">Name</label>
          <input
            type="text"
            class="px-2 py-2 w-full bg-gray-100"
            placeholder="Jonathan Martz"
          />
        </div>
        <div class="form-group">
          <label class="w-full block px-2 py-2" for="">Email</label>
          <input
            type="email"
            class="px-2 py-2 w-full bg-gray-100"
            placeholder="mail@jmartz.de"
          />
        </div>
        <div class="form-group">
          <label class="w-full block px-2 py-2" for="">Email</label>
          <textarea
            cols="10"
            rows="6"
            class="px-2 py-2 w-full bg-gray-100"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit provident architecto molestiae nemo, repudiandae dignissimos, a aut earum expedita eveniet, modi eum culpa possimus? Eveniet minus repudiandae laudantium pariatur!"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb";
let breadcrumbStore = useBreadcrumbStore();

breadcrumbStore.add({
  link: "/kontakt",
  label: "Kontakt",
});
</script>
