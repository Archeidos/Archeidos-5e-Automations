import { MODULE_ID } from './module.js';

function addSetting(options) {
    let setting = {
        scope: options.scope ?? 'world',
        config: false,
        type: options.type,
        default: options.default,
        onChange: options.onChange,
        choices: options.choices,
        reloadRequired: options.reloadRequired,
        select: options.select
    };
    game.settings.register(MODULE_ID, options.key, setting);
    if (options.category) settings.addMenuSetting(options.key, options.category);
}
