<template>
  <div>
    <div id="firstBar">
      <div id="logo">
        <img class="mr-3" :src="require('../assets/dezenfektan-logo.png')" height="100" style="padding-left: 0px" />
      </div>
    </div>
    <nav v-bind:class="active" v-on:click.prevent>
      <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
      <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
      <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
      <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
    </nav>


    <div id="menu" class="row">
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">ANASAYFA</a>
        </li>
        <li class="menu__item menu__item--dropdown" v-on:click="toggle('institutional')" v-bind:class="{'open' : dropDowns.institutional.open}">
          <a class="menu__link menu__link--toggle" href="#">
            <span>KURUMSAL</span>
            <i class="menu__icon fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Aktuelle Runde</a>
            </li>
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Siegerliste</a>
            </li>
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Aktuelle Runde</a>
            </li>
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Siegerliste</a>
            </li>
          </ul>
        </li>

        <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking')" v-bind:class="{'open' : dropDowns.ranking.open}">
          <a class="menu__link menu__link--toggle" href="#">
            <span>Rangliste</span>
            <i class="menu__icon fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Aktuelle Runde</a>
            </li>
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Siegerliste</a>
            </li>
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Aktuelle Runde</a>
            </li>
            <li class="dropdown-menu__item">
              <a class="dropdown-menu__link" href="#">Siegerliste</a>
            </li>
          </ul>
        </li>

        <li class="menu__item">
          <a class="menu__link" href="#">Belegungskalender</a>
        </li>
      </ul>

      <pre>{{ dropDowns | json }}</pre>
    </div>



    <p>You chose <b>{{ active }}</b></p>
    <vueper-slides>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
    </vueper-slides>
  </div>


</template>


<script>

import HomePage from '../mixins/HomePage.js' ;

export default {
  mixins : [HomePage]
}
</script>

<style lang="css">
  @import "../style/HomePage.css" ;
</style>

<style lang="scss">
  @import "../style/MenuBar.scss" ;
</style>
