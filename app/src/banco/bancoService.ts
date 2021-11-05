import { $injector } from '@uirouter/core';
import * as angular from 'angular'

// const service = angular.module('app', []).service('bancoService', function($http, $scope){

//    this.carregarContas = function(){
//    return $http.get("http://localhost:8080/fisica/listar-todos")
// }
// })

class bancoService{
   constructor(public $http){
  }  
  getcontas(){
     return this.$http.get("http://localhost:8080/fisica/listar-todos");
  }

  logar(cpf){
   return this.$http.get("http://localhost:8080/pessoa/logar/"+cpf)
  }

 cadastrarConta(pessoa){
 this.$http.post("http://localhost:8080/pessoa/", pessoa)
 }
}
 bancoService['$inject']=['$http']

export default bancoService;
// export default service