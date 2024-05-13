import { Modal } from '@dhis2/ui';

// Ensure 'container' is a valid element where the modal should be appended
const container = document.getElementById('container');
if (container) {
  Modal.open({
    component: CreateErrorModal, // Replace with your actual component
    props: { /* additional props if needed */ },
  }, container);
} else {
  console.error('Container element not found');
}
