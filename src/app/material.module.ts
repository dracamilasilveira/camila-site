import { NgModule  } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { MatButtonModule  } from '@angular/material/button'
import { MatGridListModule  } from '@angular/material/grid-list';
import { MatInputModule  } from '@angular/material/input';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatListModule  } from '@angular/material/list';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatMenuModule  } from '@angular/material/menu';
import { MatSelectModule  } from '@angular/material/select';
import { MatCardModule  } from '@angular/material/card';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatExpansionModule  } from '@angular/material/expansion';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatTabsModule  } from '@angular/material/tabs';
//import { MatRadioModule  } from '@angular/material/radio';


@NgModule({
      imports: [MatButtonModule, MatGridListModule, MatInputModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatSelectModule, MatCardModule, MatSlideToggleModule, MatCheckboxModule, MatExpansionModule, MatDatepickerModule, MatDialogModule, MatTabsModule],
        exports: [MatButtonModule, MatGridListModule,MatInputModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatSelectModule, MatCardModule, MatSlideToggleModule, MatCheckboxModule, MatExpansionModule, MatDatepickerModule, MatDialogModule, MatTabsModule],
        
})

export class MaterialModule { }
