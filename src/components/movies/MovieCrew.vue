<template>
  <div>
    <button
      uk-toggle="target: #crewModal"
      type="button"
      class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
    >
      Crew
    </button>
    <!-- Crew Modal -->
    <div class="uk-flex-top" id="crewModal" uk-modal>
      <div
        v-bind:class="theme === 'dark' ? 'theme-dark' : ''"
        class="uk-modal-dialog uk-modal-body"
        uk-overflow-auto
      >
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">
          Crew <span class="uk-text-muted">of</span>
          {{ title }}
        </h2>
        <div class="uk-card uk-card-body uk-padding-remove-horizontal">
          <!-- printing departments and crew that work there -->
          <ul
            class="uk-list uk-text-center uk-list-striped uk-list-large uk-text-emphasis"
          >
            <li v-for="dept in crew" :key="dept.dept">
              <ul uk-accordion>
                <li>
                  <a class="uk-accordion-title" href="#">
                    {{ dept.dept }}
                  </a>
                  <div class="uk-accordion-content">
                    <ul class="uk-list uk-list-striped">
                      <li
                        v-for="crew in dept.workers"
                        :key="crew.id"
                        class="uk-text-emphasis"
                      >
                        {{ crew.name }}
                        <small class="uk-text-muted"> as </small>
                        {{ crew.job }}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close uk-margin-bottom"
            type="button"
          >
            Close
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCrew',

  props: ['crew', 'title', 'theme'],
};
</script>

<style></style>
