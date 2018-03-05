export const feedbackButton = superClass => class FeedbackButton extends superClass {
  static get is() {
    return 'feedback-button';
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.onClick.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {
    e.preventDefault();
    if (this.disabled) {
      return;
    }
    this.dispatchEvent(new CustomEvent('press', {detail: this}));
  }
};

