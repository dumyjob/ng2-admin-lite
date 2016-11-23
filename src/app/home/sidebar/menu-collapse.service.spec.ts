/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuCollapseService } from './menu-collapse.service';

describe('Service: MenuCollapse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuCollapseService]
    });
  });

  it('should ...', inject([MenuCollapseService], (service: MenuCollapseService) => {
    expect(service).toBeTruthy();
  }));
});
