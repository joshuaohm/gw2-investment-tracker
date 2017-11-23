
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwims-C71tPXAhVO02MKHe6QDlMQFggoMAA&url=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuex%2Fissues%2F676&usg=AOvVaw10MbPwet8cuvkEWdduVw8c

window.Vue = require('vue');
window.Vuex = require('vuex');

Vue.use(Vuex);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


var App = require('./App.vue');

const store = new Vuex.Store({

	state : {
		isLogged : false,
		isLoading : true,
		show : {
			dashboard : false,
			forgot : false,
			intro : false,
			news : false,
			login : false,
			register : false
		},
		settings : {
			menuAnimationTimer : 300
		}
	},

	mutations : {

		HIDE_ALL(state){
			state.show.dashboard = false;
			state.show.forgot = false;
			state.show.intro = false;
			state.show.news = false;
			state.show.login = false;
			state.show.register = false;
		},
		SHOW_INTRO(state){
			state.show.intro = true;
		},
		SHOW_NEWS(state){
			state.show.news = true;
		},
		START_LOADING(state){
			state.isLoading = true;
		},
		STOP_LOADING(state){
			state.isLoading = false;
		}

	},

	actions: {

		hideAll(context){
			context.commit('HIDE_ALL');
		},
		showIntro(context){
			context.commit('SHOW_INTRO');
		},
		showNews(context){
			context.commit('SHOW_NEWS');
		},
		startLoading(context){
			context.commit('START_LOADING');
		},
		stopLoading(context){
			context.commit('STOP_LOADING');
		}
	},

	getters : {

		isLoading : state => {
			return state.isLoading;
		},

		menuAnimationTimer : state => {
			return state.settings.menuAnimationTimer;
		},

		showIntro : state => {
			return state.show.intro;
		},

		showNews : state => {
			return state.show.news;
		}
	}
});


const app = new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
});
