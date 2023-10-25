// eslint-disable-next-line import/no-unassigned-import
import './options-storage.js';

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, { action: 'take-screenshot' });
});
