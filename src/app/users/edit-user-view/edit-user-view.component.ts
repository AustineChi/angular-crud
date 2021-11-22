import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserStateService } from '../user-state.service';
import { map, skipWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './edit-user-view.component.html',
})
export class EditUserViewComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  routeSub!: Subscription;
  userSub!: Subscription;
  constructor(public userState: UserStateService, private route: ActivatedRoute) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
    });
  }
  ngOnDestroy(): void {
   this.routeSub.unsubscribe()
  }
  ngOnInit(): void {
   this.routeSub = this.route.params
    .pipe(map((params) => params['id']))
    .subscribe((id) => {
      this.userState.getUserById(Number(id));
    });

    this.userSub = this.userState.state
    .pipe(skipWhile((state) => state.loading))
    .subscribe((state) =>{
      this.userForm.patchValue({
        name: `${state.singleUser?.first_name}  ${state.singleUser?.last_name}`
      })
    }
    )
  }
}
