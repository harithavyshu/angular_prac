import { UserDetailsComponent } from './remote/user-details/user-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumbergSortPipePipe } from './myPipes/numberg-sort-pipe.pipe';
import { LocalService1Service } from './services/local-service1.service';
import { UsersAPIComponentComponent } from './remote/users-apicomponent/users-apicomponent.component';
import { HttpClientModule } from "@angular/common/http";
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimationFormComponent } from './animation/animation-form/animation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    GrandparentComponent,
    FatherComponent,
    MotherComponent,
    UsersAPIComponentComponent,
    UserDetailsComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe,
    NumbergSortPipePipe,
    TemplateFormComponent,
    ModelFormComponent,
    AnimationFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'family',
        pathMatch: 'full'
      },
      {
        path: 'family',
        component: GrandparentComponent,
        children: [
          {
            path: 'father',
            component: FatherComponent,
          },
          {
            path: 'mother',
            component: MotherComponent,
          },
        ]
      },
      {
        path: 'task',
        component: TaskManagerComponent
      },

      {
        path: '',
        component: NotFoundComponent
      },
      {
        path: 'remoteData',
        component: UsersAPIComponentComponent
      },
      {
        path: 'remoteData/:id',
        component: UserDetailsComponent
      },
      {
        path: 'templateForm',
        component: TemplateFormComponent
      },
      {
        path: 'modelForm',
        component: ModelFormComponent
      },
      {
        path: 'animationForm',
        component: AnimationFormComponent
      },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

