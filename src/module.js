export const MODULE_ID = "archeidos-automations";

Hooks.once('init', () => {
    console.log('archeidos-automations | Initializing my custom module');
    // Register a custom setting
    game.settings.register(MODULE_ID, 'mySetting', {
        name: 'My Setting',
        hint: 'A description of what this setting does.',
        scope: 'world',
        config: true,
        type: String,
        default: 'default value'
    });

})
