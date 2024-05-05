import { RouterModule, Routes } from '@angular/router';
import { ResultResearchComponent } from './result-research/result-research.component';
import { NgModule } from '@angular/core';
import { SearchService } from './search.service';
import { FormResearchComponent } from './form-research/form-research.component';

export const routes: Routes = [
    { path: 'result',
     component: ResultResearchComponent,
     title: 'Results'
    },
    {
        path: 'form',
        component: FormResearchComponent,
        title:'Form'
    }

    

];
@NgModule({
    imports: [
    RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
    })
    export class AppRoutingModule{}