import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  //Now we will display this message only when this is not empty.
  winMessage: string = '';
  //isCross will help us in determining whose turn it is!
  isCross = false;
  itemArray : string[] = new Array(9).fill('empty');


  //Constructor Injection
  //Now we can have access of Toastr when the application will be running.
  constructor(private toastr: ToastrService) {}

  //handle on which box we are clicking and certain checks over there
  handleClick = (itemNumber: number)=>{
    //Someone has already win this game
    if(this.winMessage){
      return this.toastr.success(this.winMessage);
    }

    //Current Block is empty
    if(this.itemArray[itemNumber] === 'empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
    }
    //Current Block has already been clicked
    else{
      return this.toastr.info('Already filled');
    }

    //Check if someone has won this game after this move.
    this.checkIsWinner();
  }
      


  //Checking the winner of the game
  checkIsWinner = () => {

    if(
      this.itemArray[0] != 'empty' &&
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2]
      ) {
        this.winMessage = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[3] !== 'empty' &&
        this.itemArray[3] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[5]  
      ) {
        this.winMessage = `${this.itemArray[3]} won`;
      } else if (
        this.itemArray[6] !== 'empty' &&
        this.itemArray[6] === this.itemArray[7] &&
        this.itemArray[7] === this.itemArray[8]  
      ) {
        this.winMessage = `${this.itemArray[6]} won`;
      } else if (
        this.itemArray[0] !== 'empty' &&
        this.itemArray[0] === this.itemArray[3] &&
        this.itemArray[3] === this.itemArray[6]
      ) {
        this.winMessage = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[1] !== 'empty' &&
        this.itemArray[1] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[7]
      ) {
        this.winMessage = `${this.itemArray[1]} won`;
      } else if (
        this.itemArray[2] !== 'empty' &&
        this.itemArray[2] === this.itemArray[5] &&
        this.itemArray[5] === this.itemArray[8]
      ) {
        this.winMessage = `${this.itemArray[2]} won`;
      } else if (
        this.itemArray[0] !== 'empty' &&
        this.itemArray[0] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[8]
      ) {
        this.winMessage = `${this.itemArray[0]} won`;
      } else if (
        this.itemArray[2] !== 'empty' &&
        this.itemArray[2] === this.itemArray[4] &&
        this.itemArray[4] === this.itemArray[6]
      ) {
        this.winMessage = `${this.itemArray[2]} won`;
      }
      else{
        let found = this.itemArray.find((i)=>i==='empty');
        if(!found){
          this.toastr.warning('Match is Drawn');
          this.winMessage = 'Match is Drawn';
        }
      }


  }

    //Resetting the game
    reloadGame = ()=>{
      console.log("I'm running")
      this.winMessage = '';
      this.isCross = false;
      this.itemArray = new Array(9).fill('empty');
    };
}
