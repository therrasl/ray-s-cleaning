import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ExamplesComponent } from '../../../user/example-list/examples/examples.component';
import { QuestionsComponent } from '../../../user/questions/questions.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ExamplesComponent, QuestionsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
