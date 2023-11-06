import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'native-federation-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
