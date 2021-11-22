
import { render } from '@testing-library/angular';

import { TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";



describe('UserListComponent', () => {

beforeEach(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
});

it('should render the userlistcomponent', async () => {
  await render(UserListComponent);
});



});











// ==================== TESTs ========================


// test("render content in body", async () => {
//   const { fixture } = await render(CardComponent, {
//     template: `<app-card>blabla</app-card>`
//   });
//   fixture.componentInstance.opened = true;

//   expect(screen.getByText("blabla"));
// });

// test("icon is visible", async () => {
//   await render(CardComponent, {
//     componentProperties: {
//       icon: "fa fa-link"
//     }
//   });
//   expect(screen.queryByTestId("hIcon")).not.toBeNull();
// });

// test("icon is not visible", async () => {
//   await render(CardComponent, {
//     componentProperties: {}
//   });
//   expect(screen.queryByTestId("hIcon")).toBeNull();
// });

// test("icon emits iconClick event when clicked", async () => {
//   const sendSpy = jest.fn();

//   await render(CardComponent, {
//     template: `<app-card icon="fa fa-link" (iconClick)="simulate()">blabla</app-card>`,
//     componentProperties: {
//       simulate: sendSpy
//     }
//   });

//   const icon = screen.getByTestId("hIcon");
//   console.log(icon);
//   fireEvent.click(icon);
//   expect(sendSpy).toHaveBeenCalledTimes(1);
// });
