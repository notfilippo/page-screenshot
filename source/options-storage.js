import OptionsSync from 'webext-options-sync';

const options = new OptionsSync({
	defaults: {
		botToken: 'AA:BB',
		chatId: '-1234',
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true,
});

export default options;
