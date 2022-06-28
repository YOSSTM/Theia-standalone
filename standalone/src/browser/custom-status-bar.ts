import { injectable, postConstruct } from '@theia/core/shared/inversify';
import { StatusBarImpl } from '@theia/core/lib/browser';

@injectable()
export class CustomStatusBar extends StatusBarImpl {

    @postConstruct()
    protected init(): void {
        this.hide();
        
    }
}