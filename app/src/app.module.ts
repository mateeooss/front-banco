import * as angular from 'angular'
import '@uirouter/angularjs'
import templateCadastro from './banco/banco.html'
import templateLogin from './banco/bancoLogin.html'
import navBarTemplate from './navbar/navbar.html' 
//import appController from './services/banco.controller'
import BaseController from './banco/banco.controller'
import bancoService from './banco/bancoService'
import navbar from './navbar/navbar'
import templateConta from './banco/conta.html'
import templateTransferencia from './banco/transferencia.html'
import templateDeposito from './banco/deposito.html'

import './banco/bancoService'

angular.module('app', ['ui.router']).service('bancoService',bancoService)
.component('navbar', navbar)
.config(($stateProvider, $urlRouterProvider)=>{
   $stateProvider.state('app-home',{
     url:'/home',
     templateUrl: templateCadastro,
     controller: BaseController,
     controllerAs: '$ctrl'
   })
  $urlRouterProvider.otherwise('/home')
}).config(($stateProvider)=>{
  $stateProvider.state('login',{
    url:'/login',
    templateUrl: templateLogin,
    controller: BaseController,
    controllerAs: '$ctrl'
  })
})
.config(($stateProvider)=>{
  $stateProvider.state('conta',{
    url:'/conta',
    templateUrl: templateConta,
    controller: BaseController,
    controllerAs: '$ctrl'
  })
}).config(($stateProvider)=>{
  $stateProvider.state('tranferencia',{
    url:'/tranferencia',
    templateUrl: templateTransferencia,
    controller: BaseController,
    controllerAs: '$ctrl'
  })
}).config(($stateProvider)=>{
  $stateProvider.state('deposito',{
    url:'/deposito',
    templateUrl: templateDeposito,
    controller: BaseController,
    controllerAs: '$ctrl'
  })
})