import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../../../models/photo.model';

@Component({
  selector: 'photo-card',
  templateUrl: './photo-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent {
  @Input() photo: Photo;
}
