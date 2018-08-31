<template>
  <v-app>
    <v-toolbar app dark :dense="isMobile" :prominent="!isMobile">
      <v-toolbar-title v-mojs="mojsSimpleBurst" class="white--text">{{i18n.title[selectedLang.key]}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed small color="transparent" class="white--text" @click="openGitHub"
        v-mojs="mojsSimpleBurst">
          <v-icon v-if="!isMobile" light left>code</v-icon>
          {{i18n.github[selectedLang.key]}}
        </v-btn>
      <v-menu offset-y transition="scale-transition">
        <v-btn depressed small color="transparent" class="white--text" slot="activator"
          v-mojs="mojsSimpleBurst">
          <v-icon v-if="!isMobile" light left>language</v-icon>
          {{selectedLang.lang}}
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(language, index) in languages"
            :key="index"
            @click="selectedLang = language">
            <v-list-tile-title>{{ language.lang }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content class="bgr" :style="{background: bgc}">
        <v-container fluid>
          <v-layout>
            <v-flex xs12 sm10 offset-sm1>
              <v-card class="my-4">

                <!-- IMAGE -->
                <v-parallax
                  :src="imgMafinex"
                  height="300">
                  <v-container
                    fill-height
                    fluid
                    pa-2 pt-4>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="display-1 white--text" v-mojs="mojsSimpleBurst">
                          <v-icon x-large class="white--text" left>insert_invitation</v-icon>
                          {{i18n.date[selectedLang.key]}}
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-parallax>

                <!-- INVITATION CONTENT -->
                <v-container class="pb-0">
                      <h3 v-mojs="mojsSimpleBurst" class="headline">{{i18n.header[selectedLang.key]}}</h3>
                </v-container>

                <!-- DETAILS -->
                <v-list three-line>
                  <!-- DATE -->
                  <v-list-tile
                    avatar>
                    <v-list-tile-avatar v-mojs="mojsSimpleBurst">
                      <v-icon class="amber white--text">location_on</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content v-mojs="mojsSimpleBurst">
                      <v-list-tile-title>{{i18n.locationInfo[selectedLang.key]}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{i18n.locationDescription[selectedLang.key]}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider inset></v-divider>

                  <!-- LOCATION -->
                  <v-list-tile
                    avatar>
                    <v-list-tile-avatar v-mojs="mojsSimpleBurst">
                      <v-icon class="primary white--text">insert_invitation</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content v-mojs="mojsSimpleBurst">
                      <v-list-tile-title>{{i18n.dateInfo[selectedLang.key]}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{i18n.dateDescription[selectedLang.key]}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>

                <v-container>
                      <span class="subheading" v-mojs="mojsSimpleBurst">{{i18n.invitation[selectedLang.key]}}</span>
                      <!-- <v-divider class="my-3"></v-divider> -->
                      <div class="title my-3" v-mojs="mojsSimpleBurst">{{i18n.slogan[selectedLang.key]}}</div>
                </v-container>

                <v-divider light></v-divider>

                <!-- FOOTER BUTTONS -->
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-btn class="mr-4" flat @click="downloadEvent" v-mojs="mojsSimpleBurst">
                    <v-icon v-if="!isMobile" dark left>cloud_download</v-icon>
                    {{i18n.downloadEvent[selectedLang.key]}}
                  </v-btn>
                  <v-btn
                    v-mojs="mojsSimpleBurst"
                    class="mx-0"
                    color="primary"
                    :large="!isMobile"
                    @click="attend">
                    {{i18n.attend[selectedLang.key]}}
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-content>
    <v-footer app dark class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; Jascha A. Quintern {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
    this.nextColor(0)
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 600
    },
    openGitHub() {
      setTimeout(() => {
        window.open(
          'https://github.com/fuchsvomwalde/webapp-invitation',
          '_blank'
        )
      }, 200)
    },
    attend() {
      setTimeout(() => {
        window.open('https://goo.gl/forms/DMwt7n3zhhLv90JI2', '_blank')
      }, 200)
    },
    downloadEvent() {
      setTimeout(() => {
        window.open(require('!url-loader!./assets/calendar-event.ics'))
      }, 200)
    },
    nextColor(val) {
      this.counter = val
      this.bgc = this.colors[val % this.colors.length]
      setTimeout(() => this.nextColor(val + 1), 5000)
    }
  },
  data: () => ({
    counter: 0,
    colors: ['#FAFAFA', '#EEEEEE', '#BDBDBD', '#F5F5F5', '#E0E0E0'],
    show: false,
    imgMafinex: require('!url-loader!./assets/mafinex.jpg'),
    selectedLang: {
      lang: 'Deutsch',
      key: 'de'
    },
    languages: [
      {
        lang: 'Deutsch',
        key: 'de'
      },
      {
        lang: 'English',
        key: 'en'
      },
      {
        lang: 'Kölsch',
        key: 'kl'
      }
    ],
    isMobile: window.innerWidth < 600,
    i18n: {
      title: {
        de: 'EINLADUNG',
        en: 'INVITATION',
        kl: 'ENLADUNG'
      },
      github: {
        de: 'GitHub',
        en: 'GitHub',
        kl: 'GitHub wat?'
      },
      date: {
        de: '27. Oktober 2018',
        en: '27 October 2018',
        kl: '27. Oktoover 2018'
      },
      header: {
        de:
          'Letzte Chance: Umtrunk zur wohlmöglich letzten Zeitumstellung eures Lebens!',
        en:
          'Last chance: Celebration at the probably last switch to standard time of your life!',
        kl:
          'Letzte Mäglichkeit: Jeloch zor müjjelich letzten Zickumstellung örs Levve!'
      },
      invitation: {
        de:
          'Jooo... dachte mir zum 30ten kann man mal was veranstalten. Daher will ich mit euch am 27. Oktober nicht nur die letzte Gelegenheit ausnutzen durch die Zeitumstellung eine Stunde länger mit euch abzuhängen (ich mein ganz ehrlich, dass mach ich doch nicht freiwillig), sondern in gemütlicher Runde meinen 30ten nachzufeiern. Man wird nur einmal 30 sagen die Leute, totaler Blödsinn, ich werde jedes Jahr nur einmal irgendwas... Anyway, hab bock auf euch, daher hab ich die Lounge im MAFINEX für uns organisiert damit meine Bude diesmal sauber bleibt und das Gelage seine gebührenden Atmosphäre erhält. Ein Profi-Ulrich-Tischkicker steht bereit, für ein kleines Tischkicker-Turnier-Intermezzo steht also nichts im Wege. Ach da war noch was, Startup-Life und so. Da mein Monatsgehalt bereist für die zwei, drei Kästen Bier und die Reinigungskosten drauf geht wär es Hammer wenn ihr goldenen Bölkstoff selbst mitbring oder worauf auch immer ihr Bock habt! Ihr habt Fragen, ihr braucht noch was, wollt in MA übernachten? >> Call me (+49 157 738 198 80).',
        en: `Jooo... thought I'd have a party for the 30th. Therefore I don't want to take the last chance to hang out with you – due to the last switch to standard time – on October 27th (I mean honestly, do you think I do that voluntarily), but to celebrate my 30th birthday in a relaxed atmosphere. People say you turn 30 only once in a life, total nonsense, I will always turn to something only once a year... (no I don't think that phrase comes across so well in English). Anyway, I like you (I'm sure about that), so I organized the lounge in the MAFINEX for us so that my apartment stays clean this time and the feast gets its due atmosphere. A professional "Ulrich" table soccer table is available, so nothing stands in the way of a small table soccer tournament intermezzo. Oh, there was something else, startup life and such. Since my monthly salary gets spent for the two or three crates of beer and the cleaning costs it would be awesome if you bring your own golden fuel or whatever you fancy! You have questions, you need something else, want to stay overnight in MA? Call me (+49 157 738 198 80).`,
        kl: `Jooo... dacht mr zom 30ten kann ma ens wat veranstalten. Derher well isch met üch am 27. Oktoover net nor der letzte Ringeldüvje ausnutzen dürch der Zickumstellung e Stunde länger met üch abzuhäänge (isch mi janz ihrlich, dat maach isch endoch net freiwillisch), sondern en gemühtlisch Rund minge 30ten noh ze feere. Mer weed nor eenmol 30 sagen der Löck, totaler Kappes, isch wed jedes Johr nor eenmol irgend wat... Ejal, hab bock op üch, derher hab isch der Kneip em MAFINEX för m'r geboocht domet ming Bud dismol rein bliev un dat Jeloch sing gebührenden Stimmung erhäält. A Profi-Ulrich-Tischkicker steiht parat, för a kleines Tischkicker-Turnier-Intermezzo steiht esu nix em Wege. Och do wor noch wat, Startup Levve un esu. Do mi Mondluhn bereist för der zwei, drei Käste Oberjärijes un der Reinigungs Koste drop jeht wär et jood wann ehr goldenes Oberjärijes (m'r han kei anderes Wood doför) selvs mitbring ov wodrop och emme ehr Bock habt! Ehr habt Froche, ehr bruch noch wat, wollt en MA penne? >> Ruft mich aan (+49 157 738 198 80).`
      },
      slogan: {
        de: 'Lasst uns einen genialen Abend haben, euer Jascha!',
        en: "Let's have a great evening, your Jascha!",
        kl: `Lasst m'r ein genialen Ovend han, ör Jascha!`
      },
      locationInfo: {
        de: 'MAFINEX-Technologiezentrum',
        en: 'MAFINEX Technology Centre',
        kl: 'MAFINEX-Technologiezentrum'
      },
      locationDescription: {
        de:
          'Julius-Hatry-Straße 1, 68163 MA, Lounge EG Bauteil-C (dort wo noch Licht brennt)',
        en:
          'Julius-Hatry-Straße 1, 68163 MA, lounge @ ground floor building C (where light is still on)',
        kl:
          'Julius-Hatry-Straße 1, 68163 MA, Lounge EG Bauteil-C (dort wo noch Leech brennt)'
      },
      dateInfo: {
        de: '27. Oktober 2018',
        en: '27 October 2018',
        kl: '27. Oktoover 2018'
      },
      dateDescription: {
        de: 'ab 19h bis in die Nacht hinein (+1 Stunde)',
        en: 'from 19h into the night (+1 hour)',
        kl: 'af 19h bes en der Naach ren (+1 Stunde)'
      },
      downloadEvent: {
        de: 'Zum Kalendar hinzufügen',
        en: 'Add to calendar',
        kl: 'Zom Kalendar hin ze föje'
      },
      attend: {
        de: 'Teilnehmen',
        en: 'Attend',
        kl: 'Met maache'
      }
    },
    mojsSimpleBurst: {
      count: 6,
      radius: { 15: 100 },
      origin: '100% 100%',
      degree: 360,
      children: {
        shape: 'polygon',
        fill: ['black', 'white'],
        isSwirl: true,
        swirlSize: 10,
        swirlFrequency: 2,
        delay: 'stagger(0, 30)'
      }
    },
    bgc: '#1A237E'
  })
}
</script>

<style>
/* import vuetify styles */
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
@import url('vuetify/dist/vuetify.min.css');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.v-content[data-booted='true'].bgr {
  transition: 5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
