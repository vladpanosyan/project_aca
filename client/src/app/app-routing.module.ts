import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdDatepickerPopupModule } from "./datepicker-popup.module"; 
// services
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserService } from "./services/user/user.service";
import { UserAuthService } from "./services/auth/user-auth.service";
import { PortalService } from "./services/portal/portal.service";
import { NickNameService } from "./services/nickName/nick-name.service";
import { AnswerService } from "./services/answer/answer.service";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { JwtInterceptor } from "./services/interceptor/interceptorJWT.service";
import { QuestionService } from "./services/question/question.service";

// forms
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// components
import { UserRegistrationComponent } from "./components/registration/user-registration/user-registration.component";
import { UserLoginComponent } from "./components/login/user-login/user-login.component";
import { PortalComponent } from "src/app/components/portal/portal.component";
import { PortalDetailComponent } from "src/app/components/portal/portal-detail/portal-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { CoverComponent } from "./components/cover/cover.component";
import { PortalModalComponent } from "./components/home/portal-modal/portal-modal.component";
import { SendMailModalComponent } from "src/app/components/home/send-mail-modal/send-mail-modal.component";

import { ChatListComponent } from "./components/portal/portal-detail/chat-list/chat-list.component";
import { Top10ListComponent } from "./components/portal/portal-detail/top10-list/top10-list.component";
import { MessageComponent } from "./components/portal/portal-detail/message/message.component";
import { QuestionComponent } from "./components/portal/portal-detail/question/question.component";
import { SettingsComponent } from "./components/portal/portal-detail/settings/settings.component";
import { PortalStatisticComponent } from './components/ngbootstrap/portal-statistic/portal-statistic.component';
// guard
import { AuthGuard } from "./guards/auth.guard";
import { SubscriberGuard } from "./guards/subscriber.guard";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserRegisterValidateComponent } from './components/registration/user-register-validate/user-register-validate.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "cover",
    pathMatch: "full"
  },
  {
    path: "cover",
    component: CoverComponent
  },
  {
    path: "users/home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/register",
    component: UserRegistrationComponent
  },
  {
    path: "users/register/validate/:token",
    component: UserRegisterValidateComponent
  },
  {
    path: "users/login",
    component: UserLoginComponent
  },
  {
    path: "portals/:token",
    component: PortalDetailComponent,
    canActivate: [SubscriberGuard]
  },
  {
    path: "portals",
    component: PortalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserLoginComponent,
    HomeComponent,
    PortalComponent,
    PortalDetailComponent,
    CoverComponent,
    PortalModalComponent,
    SendMailModalComponent,
    ChatListComponent,
    Top10ListComponent,
    MessageComponent,
    QuestionComponent,
    SettingsComponent,
    NotFoundComponent,
    UserRegisterValidateComponent,
    PortalStatisticComponent
  ],
  imports: [
    NgbdDatepickerPopupModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [
    UserService,
    UserAuthService,
    PortalService,
    NickNameService,
    AnswerService,
    QuestionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule]
})
export class AppRoutingModule {
  constructor() {}
}
