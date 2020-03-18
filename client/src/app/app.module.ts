import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

// Import social login module
import { SocialLoginModule, AuthServiceConfig, LoginOpt, GoogleLoginProvider } from "angularx-social-login";
// Import login providers
import { FacebookLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from "./app-routing.module";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { environment } from "src/environments/environment";

const socketConfig: SocketIoConfig = { url: `http://localhost:${environment.port}`, options: {} };
const googleLoginOptions: LoginOpt = {
  scope: "profile email"
};
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("831828400593240")
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("698439418678-drrn1p2djkgc9m1gla4p0k39qo96der9.apps.googleusercontent.com", googleLoginOptions)
  }
]);


export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    AppRoutingModule,
    SocialLoginModule,
    NgbModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [
    {
      provide: AuthServiceConfig,

      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
