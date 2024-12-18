import { CommonModule, DOCUMENT, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, Inject, OnDestroy, inject } from '@angular/core';
import { Header } from '../../data';
import { BreakpointObserver } from '@angular/cdk/layout'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnDestroy {
  public readonly HEADER = Header

  public readonly LOGO = '../../../assets/logo.png'

  private readonly WINDOW: Window

  constructor(
    private readonly breakpointService: BreakpointObserver,
    private readonly destroyRef: DestroyRef,
    @Inject(DOCUMENT) private readonly document: Document,
    ){
      this.WINDOW = this.document.defaultView as Window
    }


  public isOpen: boolean = false  

  public isScroll: boolean = false

  public isMobileHeader: boolean = false

  public isGuestInfo: boolean = false

  private unsubscribe$ = new Subject<void>()

  private readonly navigationService = inject(NavigationService)

  ngOnInit(): void {
    this.onScroll()
    this.isGuestInfo = this.navigationService.isGuestInfo()
    this.breakpointService.observe(`(max-width: 820px)`)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(state => {
      this.isMobileHeader = state.matches 
    })
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next()
      this.unsubscribe$.complete()
  }

  public navigateToRsvp(): void {
    this.navigationService.navigateTo('/rsvp')
  }

  public toggle(): void {
    this.isOpen = !this.isOpen
  }

  private onScroll(): void {
    fromEvent(this.document, 'scroll')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.isScroll = (this.WINDOW.scrollY >= 1) as boolean
    })
  }

}
