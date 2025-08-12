<template>
  <v-app>
    <v-app-bar
      app
      color="#fff159"
      flat
      height="100"
      class="px-0"
    >
      <v-container class="py-0">
        <v-row align="center" no-gutters class="mt-2">
          <v-col cols="2">
            <v-img
              alt="Mercado Livre Logo"
              class="ml-n2"
              contain
              src="./assets/mercado-livre-logo.png"
              max-width="134"
              height="40"
            />
          </v-col>
          <v-col cols="7">  
            <v-text-field
                solo
                dense
                label="Buscar produtos, marcas e muito mais..."
                color="white" 
                append-icon="mdi-magnify"
                hide-details
                class="ml-2"
                rounded
                background-color="white"
            />
          </v-col>
          <v-col cols="3" class="text-right">
            <v-btn text color="#00a650" class="font-weight-bold text-none px-1">
              <v-img src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp" max-width="60" class="mr-1"></v-img>
              <span class="text-subtitle-2">meli<span class="yellow darken-3 white--text px-1 rounded">+</span></span>
            </v-btn>
          </v-col>
        </v-row>
        
    
        
        <v-row no-gutters class="mt-1">
          <v-col cols="3" class="d-flex align-center">
            <v-icon small color="grey darken-2">mdi-map-marker</v-icon>
            <span class="text-caption grey--text text--darken-2 ml-1">Enviar para Felipe A...</span>
            <span class="text-caption grey--text text--darken-2 ml-1">Via Costeira Um 195</span>
          </v-col>
          
          <v-col cols="9">
            <v-tabs
              background-color="transparent"
              color="grey darken-1"
              slider-color="grey darken-1"
              height="32"
              hide-slider
            >
              <v-tab class="text-caption text-none px-2" min-width="0">Categorias</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Ofertas</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Cupons</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Supermercado</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Moda</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Mercado Play</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Vender</v-tab>
              <v-tab class="text-caption text-none px-2" min-width="0">Contato</v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
