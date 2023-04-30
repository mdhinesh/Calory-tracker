import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { take } from 'rxjs/operators';

declare var google: { accounts: { id: { renderButton: (arg0: any, arg1: { type: string; size: string; text: string; theme: string; }) => void; }; }; };

@Directive({
  selector: 'google-signin-butt'
})
export class GoogleSigninButtDirective implements OnInit {

  @Input('selectable')
  option: boolean = false;

  constructor(private el: ElementRef, private socialAuthService: SocialAuthService) { }

  ngOnInit() {
    if (!this.option) return;
    this.socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(this.el.nativeElement, {
        type: 'standard',
        size: 'medium',
        text: 'signin_with',
        theme: 'filled_blue'
      });
    });
    // console.log('User data:', this.socialAuthService.authState);
  }
}
