import { ApplicationShell, StatusBarImpl } from '@theia/core/lib/browser';
import { ContainerModule } from '@theia/core/shared/inversify';
import { CustomApplicationShell } from './custom-application-shell';
import { CustomStatusBar } from './custom-status-bar';

export default new ContainerModule((bind, unbind, isBound, rebind) => {
    bind(CustomApplicationShell).toSelf().inSingletonScope();
    rebind(ApplicationShell).to(CustomApplicationShell).inSingletonScope();
    bind(CustomStatusBar).toSelf().inSingletonScope();
    rebind(StatusBarImpl).to(CustomStatusBar).inSingletonScope();
});
