  <template>
    <main>
      <h1>Index Page</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="currency in data.data" :key="currency.id">
            <td>{{ currency.name }}</td>
            <td>{{ currency.symbol }}</td>
            <td>{{ currency.price_usd }}</td>
            <td>
              <NuxtLink :to="'/currency/' + currency.id">{{ currency.id }}</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>

    </main>
  </template>

<script setup>
  const { data } = await useFetch('/api/tickers/?limit=10')
</script>

<!-- 
    Složka pages/ je místo, kde Nuxt automaticky generuje routy podle struktury souborů. 
    Nemusíš ručně psát žádný vue-router – Nuxt to udělá za tebe. 
  -->