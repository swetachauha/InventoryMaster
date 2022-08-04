import { Pipe, PipeTransform } from '@angular/core';
import { GroupTableComponent } from '../views/group-table/group-table.component';
import { GroupComponent } from '../views/group/group.component';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(): unknown {
    return null;
  }

}
