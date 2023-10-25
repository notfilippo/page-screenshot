import OptionsSync from 'webext-options-sync';

const options = new OptionsSync({
	defaults: {
		botToken: 'AA:BB',
		chatId: '-1234',
		topicId: '',
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true,
});

export default options;
