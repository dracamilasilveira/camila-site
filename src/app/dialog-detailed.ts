import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

export interface DData {
        title: string;
        question: string;            
}

@Component({
        selector: 'dialog-detailed',
        templateUrl: 'dialog-detailed.html',          
})

export class DialogOverviewDetailed {

    constructor(
                public dialogRef: MatDialogRef<DialogOverviewDetailed>,
                        @Inject(MAT_DIALOG_DATA) public data: DData
    ) { }

    onNoClick(): void {
                this.dialogRef.close();
                    
    }

    toImed() {
        //window.location.replace("https://aol.imedicina.com.br/#/event/24754/1137935");
        window.open("https://aol.imedicina.com.br/#/event/24754/1137935", '_blank');
    }

    onClick(): boolean {
                return true;
                    
    }
    
}
