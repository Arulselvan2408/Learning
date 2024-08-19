import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlflows/ifelse/ifelse.component';
import { ForSwitchComponent } from './components/controlflows/for-switch/for-switch.component';
import { TemplateFormComponent } from './components/Forms/template-form/template-form.component';

export const routes: Routes = [
    {
        path : 'add-employee',
        component:AddEmployeeComponent
    },
    {
        path : 'employee-list',
        component:EmployeeListComponent
    },
    {
        path : 'data-binding',
        component:DataBindingComponent
    },
    {
        path : 'structural-dir',
        component: StructuralDirectiveComponent
    },
    {
        path : 'attribute-dir',
        component: AttributeDirectiveComponent
    },
    {
        path : 'ifelse',
        component: IfelseComponent
    },
    {
        path : 'for-switch',
        component:ForSwitchComponent
    },
    {
        path : 'template-form',
        component : TemplateFormComponent
    }

];
