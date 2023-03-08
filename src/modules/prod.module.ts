import { NgModule } from "@angular/core";
import { ApiService } from "../services/api/api.service";
import { API_ABSTRACT } from "../services/api/api.abstract";

@NgModule({
    providers: [
        { provide: API_ABSTRACT, useClass: ApiService}
        // Add Additional Services Here
    ]
})

export class ProductionModule {}