import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ]
})
export class SharedModules {}