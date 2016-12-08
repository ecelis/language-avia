'use babel';

import LanguageAviaView from './language-avia-view';
import { CompositeDisposable } from 'atom';

export default {

  languageAviaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    /*this.languageAviaView = new LanguageAviaView(state.languageAviaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.languageAviaView.getElement(),
      visible: false
    });*/

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-avia:toggle': () => this.toggle()
    }));
  },

  toggle() {
    console.log('LanguageAvia was toggled!');
    /*return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );*/
  }

};
