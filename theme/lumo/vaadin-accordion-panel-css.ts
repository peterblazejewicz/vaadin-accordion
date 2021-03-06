import { css } from 'lit-element';
import '@vaadin/vaadin-lumo-styles/color.js';
import { detailsStyles } from '@vaadin/vaadin-details/theme/lumo/vaadin-details-css.js';

export const accordionPanelStyles = css`
  /* imported styles start */
  ${detailsStyles}
  /* imported styles end */

  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;
