import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-guest-info',
  templateUrl: './guest-info.component.html',
  styleUrls: ['./guest-info.component.scss']
})
export class GuestInfoComponent implements OnInit {
  public readonly image = '../../assets/guest-info.png'

  constructor(
    private readonly breakpointService: BreakpointObserver,
    private readonly destroyRef: DestroyRef,
    ){}


  public isMobile: boolean = false

  ngOnInit(): void {
    this.breakpointService.observe(`(max-width: 1200px)`)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(state => {
      this.isMobile = state.matches 
    })
  }
}
