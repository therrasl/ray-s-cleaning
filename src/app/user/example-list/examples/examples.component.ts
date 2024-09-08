import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiCarouselModule, TuiIslandModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [TuiCarouselModule, TuiIslandModule ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ExamplesComponent {

}
