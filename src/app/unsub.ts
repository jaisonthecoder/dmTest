import { Inject, Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
@Inject
export abstract class UnSub implements OnDestroy {
  unSubscribe$ = new Subject<void>();

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
