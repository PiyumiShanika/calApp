import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-App';
  result:string='';
  resultName ='Result';

  add(firstNum:string,secondNum:string){
    this.resultName='Add Result';
    this.result = (Number(firstNum)+Number(secondNum)).toString();
  }

  
  subtract(firstNum:string,secondNum:string){
    this.resultName='Subtract Result';
    this.result = (Number(firstNum)-Number(secondNum)).toString();
  }
  multiply(firstNum:string,secondNum:string){
    this.resultName='Multiply Result';
    this.result = (Number(firstNum)*Number(secondNum)).toString();
  }
  divide(firstNum:string,secondNum:string){
    this.resultName='Divide Result';
    this.result = (Number(firstNum)/Number(secondNum)).toString();
  }
}
