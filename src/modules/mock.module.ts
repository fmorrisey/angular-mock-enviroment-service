import { NgModule } from '@angular/core';
import { ApiMockService } from '../services/api/api-mock.service';
import { API_ABSTRACT } from '../services/api/api.abstract';

@NgModule({
    providers: [
        { provide: API_ABSTRACT, useClass: ApiMockService }
        // Add Additional Services Here
    ]
})

export class MockModule {}