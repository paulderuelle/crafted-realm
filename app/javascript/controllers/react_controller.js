import { Controller } from "@hotwired/stimulus"
import React from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from '../components/homepage.jsx';

export default class extends Controller {
  connect() {
  const productContainer = document.querySelector('[data-controller="react"]');
  const productRoot = createRoot(productContainer);

    productRoot.render(<Homepage />);
  }
}
