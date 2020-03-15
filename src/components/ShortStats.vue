<template>
  <div class="bg-indigo-800">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
          Trusted by developers from over 80 planets
        </h2>
        <p class="mt-3 text-xl leading-7 text-indigo-200 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
        </p>
      </div>
      <div class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <template v-for="edge in $static.stats.edges">
          <div :key="edge.node.confirmed">
            <p class="text-5xl leading-none font-extrabold text-white">
              {{ edge.node.confirmed.value | formatNumber }}
            </p>
            <p class="mt-2 text-lg leading-6 font-medium text-indigo-200">
              Confirmed
            </p>
          </div>
          <div :key="edge.node.recovered">
            <p class="text-5xl leading-none font-extrabold text-white">
              {{ edge.node.recovered.value | formatNumber }}
            </p>
            <p class="mt-2 text-lg leading-6 font-medium text-indigo-200">
              Recovered
            </p>
          </div>
          <div :key="edge.node.deaths">
            <p class="text-5xl leading-none font-extrabold text-white">
              {{ edge.node.deaths.value | formatNumber }}
            </p>
            <p class="mt-2 text-lg leading-6 font-medium text-indigo-200">
              Dead
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    stats: allStats {
      edges {
        node {
          confirmed {
            value
          }
          recovered {
            value
          }
          deaths {
            value
          }
        }
      }
    }
  }
</static-query>
