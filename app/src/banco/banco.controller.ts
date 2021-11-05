import { $injector } from '@uirouter/core';
import * as angular from 'angular'
import navbar from '../navbar/navbar';
import bancoService from './bancoService'
import './banco.scss'
import 'bootstrap'

class BaseController {
    private perfill;
    private banco; 
    constructor(public bancoservice, public $state, public $scope) {
        
    }

    rota(){
        this.$state.go('app-home')
    }
    getPerfil(){
    return this.perfill
    }

   perfil(cpf){
    
    this.logar(cpf);
    if(this.perfill ){
        
        this.$state.go('conta');
    }else{
        console.log('deu não fi')
        delete this.perfill;
    }
    
   }

    logar(cpf){
    return this.bancoservice.logar(cpf).then(res =>{
        this.perfill = res.data
        console.log(this.perfill);
        console.log(this.perfill.nome);
        
    })
    
    
    }

    cadastrarConta(banco){
    this.bancoservice.cadastrarConta(banco)
    // this.$state.go('app-home')     
}
    $onInit() {
    //    console.log(BaseController.navvbar)
        this.bancoservice.getcontas().then(res => {
            this.banco = res.data
        }) 
    //    console.log(this.perfill);
        
    }
}



BaseController['$inject']=['bancoService','$state','$scope'] 


export default BaseController;