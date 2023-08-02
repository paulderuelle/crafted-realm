import { Controller } from "@hotwired/stimulus"
import React from 'react';
import { createRoot } from 'react-dom/client';
import homepage from '../components/homepage.jsx';

export default class extends Controller {
  connect() {
    const productContainer = document.getElementById('global-container');
    const productRoot = createRoot(productContainer);

    productRoot.render(<Containers />);
  }
}
