<template>
  <div>
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>IsBlocked</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) of users" v-bind:key="index + 1">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td
              v-bind:style="{
                'color':'white',
                'background-color': user.isBlocked ? 'red' : 'green',
              }"
            >
              {{ user.isBlocked }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: "1", name: "Zain Ahmed", isBlocked: false },
        { id: "2", name: "Muhammad Shariq", isBlocked: true },
        { id: "3", name: "Arsalan Ahmed", isBlocked: true },
        { id: "4", name: "Muhammaed Omer Khan", isBlocked: false },
        { id: "5", name: "Muhammad Tanveer", isBlocked: false },
      ],
    };
  },
};
</script>

<style></style>
