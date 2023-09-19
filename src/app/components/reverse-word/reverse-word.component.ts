import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reverse-word',
  templateUrl: './reverse-word.component.html',
  styleUrls: ['./reverse-word.component.scss']
})
export class ReverseWordComponent implements OnInit {

  public originalWord: string = ""
  public reversedWord: string = ""
  public reverseWordForm !: FormGroup
  public activeMenu = 3
  

  input = [{
    name: "Menu3",
    id: "1",
    parent: {
      name: "Menu2",
      id: "2",
      parent: {
        name: "Menu1",
        id: "3",
      }
    }
  }];

  output = this.transformMenu(this.input[0], null);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reverseWordForm = this.fb.group({
      originalWord: ['']
    })

    this.consoleFunction()
    console.log('Output:', this.output)

  }

  private consoleFunction(){
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
  }

  public reverseWord() {
    this.reversedWord = this.originalWord.split(' ')
      .map(word => this.reverseLetter(word)).join(' ');
  }

  private reverseLetter(word: string) {
    return word.split('').reverse().join('');
  }

  private transformMenu(menu: any, child:any) {
    debugger
    const transformedMenu: any = {
      name: menu.name,
      id: menu.id,
      child: child
    };

    if (menu.parent) {
      transformedMenu['child'] = this.transformMenu(menu.parent, transformedMenu);
    }

    return transformedMenu;
  }

}
