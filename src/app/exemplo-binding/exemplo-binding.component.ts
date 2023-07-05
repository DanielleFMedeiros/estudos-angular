import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {

  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "";


  public retornaImg():string{
    if(this.n1>0){
      return "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f914.png"
    }return "https://cdn.pixabay.com/photo/2020/12/27/20/24/emoji-5865207_1280.png"
    
  }

  public alteraValores(){

    if(this.n1 == 10){
      this.n1 = 20;
      this.n2 = 25;
    } else {
      this.n1 = 10;
      this.n2 = 15;
    }
  }

  public diminuiN1(){
    this.n1--;
    if(this.n1){

    }

  }
}
