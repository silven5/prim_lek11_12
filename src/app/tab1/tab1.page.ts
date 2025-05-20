import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, timer } from 'rxjs';
import { zip } from 'rxjs';
import { interval, from } from 'rxjs';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }
  //Приклад1
  mySubject = new Subject();
  ras1() {
    this.mySubject.next(1);
    let subscription1 = this.mySubject.subscribe(x => {
      console.log('Підписка 1:', x);
    });
    this.mySubject.next(2);
    let subscription2 = this.mySubject.subscribe(x => {
      console.log('Підписка 2:', x);
    });
    this.mySubject.next(3);
    subscription1.unsubscribe;
    this.mySubject.next(4);
    this.mySubject.next(5);
  }
  //Приклад2
  mySubject2 = new Subject();
  //Масив з їжою
  eats = ['🌭', '🍕', '🍔', '🍟', '🥪', '🥞', '🥐', '🧇'];
  trickleEats = timer(2000).pipe(
    concatMap(val => this.eats),
    tap(val => console.log('Eat ' + val))
  )
  ras2() {
    let subscription1 = this.mySubject2.subscribe(x => {
      console.log('Підписка 1:', x);

    });
    let subscription2 = this.mySubject2.subscribe(x => {
      console.log('Підписка 2:', x);

    });
    let subscription3 = this.mySubject2.subscribe(x => {
      console.log('Підписка 3:', x);

    });
    this.trickleEats.subscribe(this.mySubject2);
  }
  //Приклад3
  mySubject3 = new ReplaySubject(2);
  ras3() {
    this.mySubject3.next(1);
    this.mySubject3.next(2);
    this.mySubject3.next(3);
    this.mySubject3.next(4);
    this.mySubject3.subscribe(x => {
      console.log('Від першого sub:', x);
    });
    this.mySubject3.next(5);
    this.mySubject3.subscribe(x => {
      console.log('Від другого sub:', x);
    });
    this.mySubject3.next(6);
    this.mySubject3.subscribe(x => {
      console.log('Від третього sub:', x);
    });
  }
  //Приклад4
  ras4() {
    let mySubject = new BehaviorSubject('Hello');
    mySubject.subscribe(x => {
      console.log('Від першого sub:', x);
    });
    mySubject.next('5');
    mySubject.subscribe(x => {
      console.log('Від другого sub:', x);
    });
    mySubject.next('6');
    mySubject.subscribe(x => {
      console.log('Від третього sub:', x);
    });
    mySubject.next('7');
  }
  //Приклад5
  ras5() {
    let sbj = new AsyncSubject();

    sbj.subscribe((vl) => console.log(`Async: ${vl}`));

    sbj.next(7);
    sbj.next(8);
    sbj.subscribe((vl) => console.log(`Async1: ${vl}`));
    sbj.next(9);
    sbj.next(10);
    setTimeout(() => sbj.complete(), 2000);
    sbj.next(101);
  }
}
